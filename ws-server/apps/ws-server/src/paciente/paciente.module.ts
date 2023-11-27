import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { PacienteTypeORM } from './entities/paciente.entity';
import { PacienteSchema } from './entities/paciente.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forFeature([PacienteTypeORM]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'Paciente', schema: PacienteSchema }]),
  ],
  controllers: [PacienteController],
  providers: [PacienteService],
})
export class PacienteModule {}
