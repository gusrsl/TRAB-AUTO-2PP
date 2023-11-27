/* eslint-disable prettier/prettier */
// consultorio/consultorio.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConsultorioTypeORM } from './entities/consultorio.entity';
import { Document } from 'mongoose';

@Injectable()
export class ConsultorioService {
  constructor(
    @InjectRepository(ConsultorioTypeORM)
    private readonly consultorioTypeOrmRepository: Repository<ConsultorioTypeORM>,
    @InjectModel('Consultorio') private readonly consultorioMongooseModel: Model<ConsultorioTypeORM & Document>,
  ) {}

  async findAll(): Promise<ConsultorioTypeORM[]> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.consultorioMongooseModel.find().exec();
    } else {
      return this.consultorioTypeOrmRepository.find();
    }
  }

  async findById(id: string): Promise<ConsultorioTypeORM | null> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.consultorioMongooseModel.findById(id).exec();
    } else {
      return this.consultorioTypeOrmRepository.findOne({where: {id: id}});
    }
  }

  async create(consultorioData: ConsultorioTypeORM): Promise<ConsultorioTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      const createdConsultorio = new this.consultorioMongooseModel(consultorioData);
      return createdConsultorio.save();
    } else {
      return this.consultorioTypeOrmRepository.save(consultorioData);
    }
  }

  async update(id: string, consultorioData: ConsultorioTypeORM): Promise<ConsultorioTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.consultorioMongooseModel.findByIdAndUpdate(id, consultorioData, { new: true }).exec();
    } else {
      const consultorio = await this.consultorioTypeOrmRepository.findOne({where: {id: id}});
      if (!consultorio) {
        throw new NotFoundException(`Consultorio con ID ${id} no encontrado.`);
      }
      this.consultorioTypeOrmRepository.merge(consultorio, consultorioData);
      return this.consultorioTypeOrmRepository.save(consultorio);
    }
  }

  async delete(id: string): Promise<void> {
    if (process.env.DB_TYPE === 'mongodb') {
      await this.consultorioMongooseModel.findByIdAndDelete(id).exec();
    } else {
      const consultorio = await this.consultorioTypeOrmRepository.findOne({where: {id: id}});
      if (!consultorio) {
        throw new NotFoundException(`Consultorio con ID ${id} no encontrado.`);
      }
      await this.consultorioTypeOrmRepository.remove(consultorio);
    }
  }
}
