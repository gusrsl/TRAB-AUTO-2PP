import { Module } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CitaController } from './cita.controller';
import { CitaTypeORM } from './entities/cita.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { CitaSchema } from './entities/cita.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([CitaTypeORM]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'Cita', schema: CitaSchema }]),
  ],
  controllers: [CitaController],
  providers: [CitaService],
})
export class CitaModule {}
