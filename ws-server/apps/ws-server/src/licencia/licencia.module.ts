import { Module } from '@nestjs/common';
import { LicenciaService } from './licencia.service';
import { LicenciaController } from './licencia.controller';
import { LicenciaTypeORM } from './entities/licencia.entity';
import { LicenciaSchema } from './entities/licencia.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([LicenciaTypeORM]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'Licencia', schema: LicenciaSchema }]),
  ],
  controllers: [LicenciaController],
  providers: [LicenciaService],
})
export class LicenciaModule {}
