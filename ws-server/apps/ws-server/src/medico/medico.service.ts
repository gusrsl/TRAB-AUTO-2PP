/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// medico.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MedicoTypeORM } from './entities/medico.entity';
import { Document } from 'mongoose'; // Ajusta la importación aquí

@Injectable()
export class MedicoService {
  constructor(
    @InjectRepository(MedicoTypeORM)
    private readonly medicoTypeOrmRepository: Repository<MedicoTypeORM>,
    @InjectModel('Medico') private readonly medicoMongooseModel: Model<MedicoTypeORM & Document>,
  ) {}

  async findAll(): Promise<MedicoTypeORM[]> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.medicoMongooseModel.find().exec();
    } else {
      return this.medicoTypeOrmRepository.find();
    }
  }

  async findById(id: any): Promise<MedicoTypeORM | null> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.medicoMongooseModel.findById(id).exec();
    } else {
      return this.medicoTypeOrmRepository.findOne({where: {id :id}});
    }
  }

  async create(medicoData: MedicoTypeORM): Promise<MedicoTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      const createdMedico = new this.medicoMongooseModel(medicoData);
      return createdMedico.save();
    } else {
      return this.medicoTypeOrmRepository.save(medicoData);
    }
  }
  

  async update(id: any, medicoData: MedicoTypeORM): Promise<MedicoTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.medicoMongooseModel.findByIdAndUpdate(id, medicoData, { new: true }).exec();
    } else {
      const medico = await this.medicoTypeOrmRepository.findOne({where: {id :id}});
      if (!medico) {
        throw new NotFoundException(`Medico con ID ${id} no encontrado.`);
      }
      this.medicoTypeOrmRepository.merge(medico, medicoData);
      return this.medicoTypeOrmRepository.save(medico);
    }
  }


  async delete(id: any): Promise<void> {
    if (process.env.DB_TYPE === 'mongodb') {
      await this.medicoMongooseModel.findByIdAndDelete(id).exec(); // Cambiado a findByIdAndDelete
    } else {
      const medico = await this.medicoTypeOrmRepository.findOne({where: {id :id}});
      if (!medico) {
        throw new NotFoundException(`Medico con ID ${id} no encontrado.`);
      }
      await this.medicoTypeOrmRepository.remove(medico);
    }
  }
}

