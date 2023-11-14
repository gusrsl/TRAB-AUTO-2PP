/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { MedicoController } from './medico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicoTypeORM } from './entities/medico.entity';
import { MongooseModule } from '@nestjs/mongoose';

import * as dotenv from 'dotenv';
import { MedicoSchema } from './entities/medico.schema';
dotenv.config();

@Module({  

  imports: [
    TypeOrmModule.forFeature([MedicoTypeORM]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'Medico', schema: MedicoSchema }]),
  ],
  controllers: [MedicoController],
  providers: [
    MedicoService,
  ],})
export class MedicoModule {}
