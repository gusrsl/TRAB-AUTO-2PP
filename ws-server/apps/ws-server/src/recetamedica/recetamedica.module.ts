/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RecetamedicaService } from './recetamedica.service';
import { RecetamedicaController } from './recetamedica.controller';
import { RecetaMedicaTypeORM } from './entities/recetamedica.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetaMedicaSchema } from './entities/recetamedica.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([RecetaMedicaTypeORM]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'RecetaMedica', schema: RecetaMedicaSchema }]),
  ],
  controllers: [RecetamedicaController],
  providers: [RecetamedicaService],
})
export class RecetamedicaModule {}
