/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RecetaMedicaTypeORM } from './entities/recetamedica.entity';
import { Document } from 'mongoose';

@Injectable()
export class RecetamedicaService {
  constructor(
    @InjectRepository(RecetaMedicaTypeORM)
    private readonly recetaMedicaTypeOrmRepository: Repository<RecetaMedicaTypeORM>,
    @InjectModel('RecetaMedica') private readonly recetaMedicaMongooseModel: Model<RecetaMedicaTypeORM & Document>,
  ) {}

  async findAll(): Promise<RecetaMedicaTypeORM[]> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.recetaMedicaMongooseModel.find().exec();
    } else {
      return this.recetaMedicaTypeOrmRepository.find();
    }
  }

  async findOne(id: string): Promise<RecetaMedicaTypeORM | null> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.recetaMedicaMongooseModel.findById(id).exec();
    } else {
      return this.recetaMedicaTypeOrmRepository.findOne({where: {id: id}});
    }
  }

  async create(createRecetaMedicaDto: any): Promise<RecetaMedicaTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      const createdRecetaMedica = new this.recetaMedicaMongooseModel(createRecetaMedicaDto);
      const savedRecetaMedica = await createdRecetaMedica.save();
      return savedRecetaMedica;  // Devolvemos la instancia guardada
    } else {
      const recetaMedica = this.recetaMedicaTypeOrmRepository.create(createRecetaMedicaDto);
      return this.recetaMedicaTypeOrmRepository.save(recetaMedica) as unknown as Promise<RecetaMedicaTypeORM>;  // Añadimos 'as Promise<RecetaMedicaTypeORM>' para ayudar a TypeScript a inferir el tipo correctamente
    }
  }
  
  
  

  async update(id: string, updateRecetaMedicaDto: any): Promise<RecetaMedicaTypeORM> {
    if (process.env.DB_TYPE === 'mongodb') {
      return this.recetaMedicaMongooseModel.findByIdAndUpdate(id, updateRecetaMedicaDto, { new: true }).exec();
    } else {
      const recetaMedica = await this.recetaMedicaTypeOrmRepository.preload({
        id: id,
        ...updateRecetaMedicaDto,
      });
      if (!recetaMedica) {
        throw new NotFoundException(`Receta Médica con ID ${id} no encontrada.`);
      }
      return this.recetaMedicaTypeOrmRepository.save(recetaMedica);
    }
  }

  async remove(id: string): Promise<void> {
    if (process.env.DB_TYPE === 'mongodb') {
      await this.recetaMedicaMongooseModel.findByIdAndDelete(id).exec();
    } else {
      const recetaMedica = await this.recetaMedicaTypeOrmRepository.findOne({where: {id: id}});
      if (!recetaMedica) {
        throw new NotFoundException(`Receta Médica con ID ${id} no encontrada.`);
      }
      await this.recetaMedicaTypeOrmRepository.remove(recetaMedica);
    }
  }
}
