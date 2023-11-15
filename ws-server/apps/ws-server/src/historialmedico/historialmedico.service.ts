/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HistorialMedicoTypeORM } from './entities/historialmedico.entity';
import { Document } from 'mongoose';

@Injectable()
export class HistorialmedicoService {
  constructor(
    @InjectRepository(HistorialMedicoTypeORM)
    private readonly historialMedicoTypeOrmRepository: Repository<HistorialMedicoTypeORM>,
    @InjectModel('Historialmedico') private readonly historialMedicoMongooseModel: Model<HistorialMedicoTypeORM & Document>,
  ) {}

  async findAll(): Promise<HistorialMedicoTypeORM[]> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.historialMedicoMongooseModel.find().exec();
    } else {
      return this.historialMedicoTypeOrmRepository.find();
    }
  }

  async findById(id: string): Promise<HistorialMedicoTypeORM | null> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.historialMedicoMongooseModel.findById(id).exec();
    } else {
      return this.historialMedicoTypeOrmRepository.findOne({where: {id: id}});
    }
  }

  async create(historialMedicoData: HistorialMedicoTypeORM): Promise<HistorialMedicoTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      const createdHistorialMedico = new this.historialMedicoMongooseModel(historialMedicoData);
      return createdHistorialMedico.save();
    } else {
      return this.historialMedicoTypeOrmRepository.save(historialMedicoData);
    }
  }

  async update(id: string, historialMedicoData: HistorialMedicoTypeORM): Promise<HistorialMedicoTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.historialMedicoMongooseModel.findByIdAndUpdate(id, historialMedicoData, { new: true }).exec();
    } else {
      const historialMedico = await this.historialMedicoTypeOrmRepository.findOne({where: {id: id}});
      if (!historialMedico) {
        throw new NotFoundException(`Historial Médico con ID ${id} no encontrado.`);
      }
      this.historialMedicoTypeOrmRepository.merge(historialMedico, historialMedicoData);
      return this.historialMedicoTypeOrmRepository.save(historialMedico);
    }
  }

  async delete(id: string): Promise<void> {
    if (process.env.DB_TYPE === 'mongodb') {
      await this.historialMedicoMongooseModel.findByIdAndDelete(id).exec();
    } else {
      const historialMedico = await this.historialMedicoTypeOrmRepository.findOne({where: {id: id}});
      if (!historialMedico) {
        throw new NotFoundException(`Historial Médico con ID ${id} no encontrado.`);
      }
      await this.historialMedicoTypeOrmRepository.remove(historialMedico);
    }
  }
}
