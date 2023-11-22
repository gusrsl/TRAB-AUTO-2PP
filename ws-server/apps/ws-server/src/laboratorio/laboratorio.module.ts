/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LaboratorioService } from './laboratorio.service';
import { LaboratorioController } from './laboratorio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { LaboratorioTypeORM } from './entities/laboratorio.entity';
import { LaboratorioSchema } from './entities/laboratorio.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([LaboratorioTypeORM]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'Laboratorio', schema: LaboratorioSchema }]),
  ],
  controllers: [LaboratorioController],
  providers: [LaboratorioService],
})
export class LaboratorioModule {}
