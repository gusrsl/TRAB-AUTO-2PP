/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HistorialmedicoService } from './historialmedico.service';
import { HistorialmedicoController } from './historialmedico.controller';
import { HistorialMedicoTypeORM } from './entities/historialmedico.entity';
import { HistorialMedicoSchema } from './entities/historialmedico.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([HistorialMedicoTypeORM]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'Historialmedico', schema: HistorialMedicoSchema }]),
  ],
  controllers: [HistorialmedicoController],
  providers: [HistorialmedicoService],
})
export class HistorialmedicoModule {}
