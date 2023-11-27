/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConsultorioService } from './consultorio.service';
import { ConsultorioController } from './consultorio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsultorioTypeORM } from './entities/consultorio.entity';
import { ConsultorioSchema } from './entities/consultorio.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([ConsultorioTypeORM]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'Consultorio', schema: ConsultorioSchema }]),
  ],
  controllers: [ConsultorioController],
  providers: [ConsultorioService],
})
export class ConsultorioModule {}
