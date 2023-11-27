/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EnfermedadService } from './enfermedad.service';
import { EnfermedadController } from './enfermedad.controller';
import { EnfermedadTypeORM } from './entities/enfermedad.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { EnfermedadSchema } from './entities/enfermedad.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([EnfermedadTypeORM]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'Enfermedad', schema: EnfermedadSchema }]),
  ],
  controllers: [EnfermedadController],
  providers: [EnfermedadService],
})
export class EnfermedadModule {}
