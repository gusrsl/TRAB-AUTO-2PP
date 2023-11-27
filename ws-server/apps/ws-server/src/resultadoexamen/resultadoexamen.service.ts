/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ResultadoExamenTypeORM } from './entities/resultadoexamen.entity';
import { Document } from 'mongoose';

@Injectable()
export class ResultadoexamenService {
  constructor(
    @InjectRepository(ResultadoExamenTypeORM)
    private readonly resultadoExamenTypeOrmRepository: Repository<ResultadoExamenTypeORM>,
    @InjectModel('ResultadoExamen') private readonly resultadoExamenMongooseModel: Model<ResultadoExamenTypeORM & Document>,
  ) {}

  async findAll(): Promise<ResultadoExamenTypeORM[]> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.resultadoExamenMongooseModel.find().exec();
    } else {
      return this.resultadoExamenTypeOrmRepository.find();
    }
  }

  async findOne(id: string): Promise<ResultadoExamenTypeORM | null> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.resultadoExamenMongooseModel.findById(id).exec();
    } else {
      return this.resultadoExamenTypeOrmRepository.findOne({ where: { id: id } });
    }
  }

  async create(createResultadoExamenDto: any): Promise<ResultadoExamenTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      const createdResultadoExamen = new this.resultadoExamenMongooseModel(createResultadoExamenDto);
      const savedResultadoExamen = await createdResultadoExamen.save();
      return savedResultadoExamen;
    } else {
      const resultadoExamen = this.resultadoExamenTypeOrmRepository.create(createResultadoExamenDto);
      return this.resultadoExamenTypeOrmRepository.save(resultadoExamen) as unknown as Promise<ResultadoExamenTypeORM>;
    }
  }
  

  async update(id: string, updateResultadoExamenDto: any): Promise<ResultadoExamenTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.resultadoExamenMongooseModel.findByIdAndUpdate(id, updateResultadoExamenDto, { new: true }).exec();
    } else {
      const resultadoExamen = await this.resultadoExamenTypeOrmRepository.preload({
        id: id,
        ...updateResultadoExamenDto,
      });
      if (!resultadoExamen) {
        throw new NotFoundException(`Resultado de Examen con ID ${id} no encontrado.`);
      }
      return this.resultadoExamenTypeOrmRepository.save(resultadoExamen);
    }
  }

  async remove(id: string): Promise<void> {
    if (process.env.DB_TYPE === 'mongodb') {
      await this.resultadoExamenMongooseModel.findByIdAndDelete(id).exec();
    } else {
      const resultadoExamen = await this.resultadoExamenTypeOrmRepository.findOne({ where: { id: id } });
      if (!resultadoExamen) {
        throw new NotFoundException(`Resultado de Examen con ID ${id} no encontrado.`);
      }
      await this.resultadoExamenTypeOrmRepository.remove(resultadoExamen);
    }
  }
}
