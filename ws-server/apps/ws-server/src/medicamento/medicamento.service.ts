/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MedicamentoTypeORM } from './entities/medicamento.entity';
import { Document } from 'mongoose'; 

@Injectable()
export class MedicamentoService {
  constructor(
    @InjectRepository(MedicamentoTypeORM)
    private readonly medicamentoTypeOrmRepository: Repository<MedicamentoTypeORM>,
    @InjectModel('Medicamento') private readonly medicamentoMongooseModel: Model<MedicamentoTypeORM & Document>,
  ) {}

  async findAll(): Promise<MedicamentoTypeORM[]> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.medicamentoMongooseModel.find().exec();
    } else {
      return this.medicamentoTypeOrmRepository.find();
    }
  }

  async findById(id: any): Promise<MedicamentoTypeORM | null> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.medicamentoMongooseModel.findById(id).exec();
    } else {
      return this.medicamentoTypeOrmRepository.findOne({ where: { id: id } });
    }
  }

  async create(medicamentoData: MedicamentoTypeORM): Promise<MedicamentoTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      const createdMedicamento = new this.medicamentoMongooseModel(medicamentoData);
      return createdMedicamento.save();
    } else {
      return this.medicamentoTypeOrmRepository.save(medicamentoData);
    }
  }

  async update(id: any, medicamentoData: MedicamentoTypeORM): Promise<MedicamentoTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.medicamentoMongooseModel.findByIdAndUpdate(id, medicamentoData, { new: true }).exec();
    } else {
      const medicamento = await this.medicamentoTypeOrmRepository.findOne({ where: { id: id } });
      if (!medicamento) {
        throw new NotFoundException(`Medicamento con ID ${id} no encontrado.`);
      }
      this.medicamentoTypeOrmRepository.merge(medicamento, medicamentoData);
      return this.medicamentoTypeOrmRepository.save(medicamento);
    }
  }

  async delete(id: any): Promise<void> {
    if (process.env.DB_TYPE === 'mongodb') {
      await this.medicamentoMongooseModel.findByIdAndDelete(id).exec();
    } else {
      const medicamento = await this.medicamentoTypeOrmRepository.findOne({where: {id:id}});
      if (!medicamento) {
        throw new NotFoundException(`Medicamento con ID ${id} no encontrado.`);
      }
      await this.medicamentoTypeOrmRepository.remove(medicamento);
    }
  }
}
