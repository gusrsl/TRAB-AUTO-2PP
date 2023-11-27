/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// paciente/paciente.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PacienteTypeORM } from './entities/paciente.entity';
import { Document } from 'mongoose'; // Ajusta la importación aquí

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(PacienteTypeORM)
    private readonly pacienteTypeOrmRepository: Repository<PacienteTypeORM>,
    @InjectModel('Paciente') private readonly pacienteMongooseModel: Model<PacienteTypeORM & Document>,
  ) {}

  async findAll(): Promise<PacienteTypeORM[]> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.pacienteMongooseModel.find().exec();
    } else {
      return this.pacienteTypeOrmRepository.find();
    }
  }

  async findById(id: string): Promise<PacienteTypeORM | null> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.pacienteMongooseModel.findById(id).exec();
    } else {
      return this.pacienteTypeOrmRepository.findOne({where: {id: id}});
    }
  }

  async create(pacienteData: PacienteTypeORM): Promise<PacienteTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      const createdPaciente = new this.pacienteMongooseModel(pacienteData);
      return createdPaciente.save();
    } else {
      return this.pacienteTypeOrmRepository.save(pacienteData);
    }
  }

  async update(id: string, pacienteData: PacienteTypeORM): Promise<PacienteTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.pacienteMongooseModel.findByIdAndUpdate(id, pacienteData, { new: true }).exec();
    } else {
      const paciente = await this.pacienteTypeOrmRepository.findOne({where: {id: id}});
      if (!paciente) {
        throw new NotFoundException(`Paciente con ID ${id} no encontrado.`);
      }
      this.pacienteTypeOrmRepository.merge(paciente, pacienteData);
      return this.pacienteTypeOrmRepository.save(paciente);
    }
  }

  async delete(id: string): Promise<void> {
    if (process.env.DB_TYPE === 'mongodb') {
      await this.pacienteMongooseModel.findByIdAndDelete(id).exec();
    } else {
      const paciente = await this.pacienteTypeOrmRepository.findOne({where: {id: id}});
      if (!paciente) {
        throw new NotFoundException(`Paciente con ID ${id} no encontrado.`);
      }
      await this.pacienteTypeOrmRepository.remove(paciente);
    }
  }
}
