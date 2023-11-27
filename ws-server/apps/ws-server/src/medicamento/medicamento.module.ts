/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MedicamentoService } from './medicamento.service';
import { MedicamentoController } from './medicamento.controller';
import { MedicamentoTypeORM } from './entities/medicamento.entity';
import { MedicamentoSchema } from './entities/medicamento.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forFeature([MedicamentoTypeORM]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'Medicamento', schema: MedicamentoSchema }]),
  ],
  controllers: [MedicamentoController],
  providers: [MedicamentoService],
})
export class MedicamentoModule {}
