/* eslint-disable prettier/prettier */
// cita.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CitaTypeORM } from './entities/cita.entity';
import { Document } from 'mongoose';

@Injectable()
export class CitaService {
  constructor(
    @InjectRepository(CitaTypeORM)
    private readonly citaTypeOrmRepository: Repository<CitaTypeORM>,
    @InjectModel('Cita') private readonly citaMongooseModel: Model<CitaTypeORM & Document>,
  ) {}

  async findAll(): Promise<CitaTypeORM[]> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.citaMongooseModel.find().exec();
    } else {
      return this.citaTypeOrmRepository.find();
    }
  }

  async findById(id: string): Promise<CitaTypeORM | null> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.citaMongooseModel.findById(id).exec();
    } else {
      return this.citaTypeOrmRepository.findOne({where: {id: id}});
    }
  }

  async create(citaData: CitaTypeORM): Promise<CitaTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      const createdCita = new this.citaMongooseModel(citaData);
      return createdCita.save();
    } else {
      return this.citaTypeOrmRepository.save(citaData);
    }
  }

  async update(id: string, citaData: CitaTypeORM): Promise<CitaTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.citaMongooseModel.findByIdAndUpdate(id, citaData, { new: true }).exec();
    } else {
      const cita = await this.citaTypeOrmRepository.findOne({where: {id: id}});
      if (!cita) {
        throw new NotFoundException(`Cita con ID ${id} no encontrada.`);
      }
      this.citaTypeOrmRepository.merge(cita, citaData);
      return this.citaTypeOrmRepository.save(cita);
    }
  }

  async delete(id: string): Promise<void> {
    if (process.env.DB_TYPE === 'mongodb') {
      await this.citaMongooseModel.findByIdAndDelete(id).exec();
    } else {
      const cita = await this.citaTypeOrmRepository.findOne({where: {id: id}});
      if (!cita) {
        throw new NotFoundException(`Cita con ID ${id} no encontrada.`);
      }
      await this.citaTypeOrmRepository.remove(cita);
    }
  }
}
