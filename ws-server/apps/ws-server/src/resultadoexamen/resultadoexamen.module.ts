/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ResultadoexamenService } from './resultadoexamen.service';
import { ResultadoexamenController } from './resultadoexamen.controller';
import { ResultadoExamenTypeORM } from './entities/resultadoexamen.entity';
import { ResultadoExamenSchema } from './entities/resultadoexamen.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([ResultadoExamenTypeORM]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'ResultadoExamen', schema: ResultadoExamenSchema }]),
  ],
  controllers: [ResultadoexamenController],
  providers: [ResultadoexamenService],
})
export class ResultadoexamenModule {}
