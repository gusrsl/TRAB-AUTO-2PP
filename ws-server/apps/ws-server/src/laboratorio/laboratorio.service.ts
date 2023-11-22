/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// laboratorio/laboratorio.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LaboratorioTypeORM } from './entities/laboratorio.entity';
import { Document } from 'mongoose';

@Injectable()
export class LaboratorioService {
  constructor(
    @InjectRepository(LaboratorioTypeORM)
    private readonly laboratorioTypeOrmRepository: Repository<LaboratorioTypeORM>,
    @InjectModel('Laboratorio') private readonly laboratorioMongooseModel: Model<LaboratorioTypeORM & Document>,
  ) {}

  async findAll(): Promise<LaboratorioTypeORM[]> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.laboratorioMongooseModel.find().exec();
    } else {
      return this.laboratorioTypeOrmRepository.find();
    }
  }

  async findById(id: string): Promise<LaboratorioTypeORM | null> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.laboratorioMongooseModel.findById(id).exec();
    } else {
      return this.laboratorioTypeOrmRepository.findOne({where: {id: id}});
    }
  }

  async create(laboratorioData: LaboratorioTypeORM): Promise<LaboratorioTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      const createdLaboratorio = new this.laboratorioMongooseModel(laboratorioData);
      return createdLaboratorio.save();
    } else {
      return this.laboratorioTypeOrmRepository.save(laboratorioData);
    }
  }

  async update(id: string, laboratorioData: LaboratorioTypeORM): Promise<LaboratorioTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.laboratorioMongooseModel.findByIdAndUpdate(id, laboratorioData, { new: true }).exec();
    } else {
      const laboratorio = await this.laboratorioTypeOrmRepository.findOne({where: {id: id}});
      if (!laboratorio) {
        throw new NotFoundException(`Laboratorio con ID ${id} no encontrado.`);
      }
      this.laboratorioTypeOrmRepository.merge(laboratorio, laboratorioData);
      return this.laboratorioTypeOrmRepository.save(laboratorio);
    }
  }

  async delete(id: string): Promise<void> {
    if (process.env.DB_TYPE === 'mongodb') {
      await this.laboratorioMongooseModel.findByIdAndDelete(id).exec();
    } else {
      const laboratorio = await this.laboratorioTypeOrmRepository.findOne({where: {id: id}});
      if (!laboratorio) {
        throw new NotFoundException(`Laboratorio con ID ${id} no encontrado.`);
      }
      await this.laboratorioTypeOrmRepository.remove(laboratorio);
    }
  }
}
