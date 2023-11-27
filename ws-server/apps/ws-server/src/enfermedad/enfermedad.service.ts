/* eslint-disable prettier/prettier */
// enfermedad/enfermedad.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { EnfermedadTypeORM } from './entities/enfermedad.entity';
import { Document } from 'mongoose';

@Injectable()
export class EnfermedadService {
  constructor(
    @InjectRepository(EnfermedadTypeORM)
    private readonly enfermedadTypeOrmRepository: Repository<EnfermedadTypeORM>,
    @InjectModel('Enfermedad') private readonly enfermedadMongooseModel: Model<EnfermedadTypeORM & Document>,
  ) {}

  async findAll(): Promise<EnfermedadTypeORM[]> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.enfermedadMongooseModel.find().exec();
    } else {
      return this.enfermedadTypeOrmRepository.find();
    }
  }

  async findById(id: string): Promise<EnfermedadTypeORM | null> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.enfermedadMongooseModel.findById(id).exec();
    } else {
      return this.enfermedadTypeOrmRepository.findOne({where: {id: id}});
    }
  }

  async create(enfermedadData: EnfermedadTypeORM): Promise<EnfermedadTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      const createdEnfermedad = new this.enfermedadMongooseModel(enfermedadData);
      return createdEnfermedad.save();
    } else {
      return this.enfermedadTypeOrmRepository.save(enfermedadData);
    }
  }

  async update(id: string, enfermedadData: EnfermedadTypeORM): Promise<EnfermedadTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.enfermedadMongooseModel.findByIdAndUpdate(id, enfermedadData, { new: true }).exec();
    } else {
      const enfermedad = await this.enfermedadTypeOrmRepository.findOne({where: {id: id}});
      if (!enfermedad) {
        throw new NotFoundException(`Enfermedad con ID ${id} no encontrada.`);
      }
      this.enfermedadTypeOrmRepository.merge(enfermedad, enfermedadData);
      return this.enfermedadTypeOrmRepository.save(enfermedad);
    }
  }

  async delete(id: string): Promise<void> {
    if (process.env.DB_TYPE === 'mongodb') {
      await this.enfermedadMongooseModel.findByIdAndDelete(id).exec();
    } else {
      const enfermedad = await this.enfermedadTypeOrmRepository.findOne({where: {id: id}});
      if (!enfermedad) {
        throw new NotFoundException(`Enfermedad con ID ${id} no encontrada.`);
      }
      await this.enfermedadTypeOrmRepository.remove(enfermedad);
    }
  }
}
