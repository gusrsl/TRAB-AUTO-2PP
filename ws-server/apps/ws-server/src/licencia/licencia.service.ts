/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// licencia.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LicenciaTypeORM } from './entities/licencia.entity';
import { Document } from 'mongoose';

@Injectable()
export class LicenciaService {
  constructor(
    @InjectRepository(LicenciaTypeORM)
    private readonly licenciaTypeOrmRepository: Repository<LicenciaTypeORM>,
    @InjectModel('Licencia') private readonly licenciaMongooseModel: Model<LicenciaTypeORM & Document>,
  ) {}

  async findAll(): Promise<LicenciaTypeORM[]> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.licenciaMongooseModel.find().exec();
    } else {
      return this.licenciaTypeOrmRepository.find();
    }
  }

  async findById(id: string): Promise<LicenciaTypeORM | null> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.licenciaMongooseModel.findById(id).exec();
    } else {
      return this.licenciaTypeOrmRepository.findOne({where: {id: id}});
    }
  }

  async create(licenciaData: LicenciaTypeORM): Promise<LicenciaTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      const createdLicencia = new this.licenciaMongooseModel(licenciaData);
      return createdLicencia.save();
    } else {
      return this.licenciaTypeOrmRepository.save(licenciaData);
    }
  }

  async update(id: string, licenciaData: LicenciaTypeORM): Promise<LicenciaTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.licenciaMongooseModel.findByIdAndUpdate(id, licenciaData, { new: true }).exec();
    } else {
      const licencia = await this.licenciaTypeOrmRepository.findOne({where: {id: id}});
      if (!licencia) {
        throw new NotFoundException(`Licencia con ID ${id} no encontrada.`);
      }
      this.licenciaTypeOrmRepository.merge(licencia, licenciaData);
      return this.licenciaTypeOrmRepository.save(licencia);
    }
  }

  async delete(id: string): Promise<void> {
    if (process.env.DB_TYPE === 'mongodb') {
      await this.licenciaMongooseModel.findByIdAndDelete(id).exec();
    } else {
      const licencia = await this.licenciaTypeOrmRepository.findOne({where: {id: id}});
      if (!licencia) {
        throw new NotFoundException(`Licencia con ID ${id} no encontrada.`);
      }
      await this.licenciaTypeOrmRepository.remove(licencia);
    }
  }
}
