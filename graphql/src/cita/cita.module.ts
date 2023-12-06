import { Module } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CitaResolver } from './cita.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from './entities/cita.entity';

@Module({
  providers: [CitaResolver, CitaService],
  imports:[
    TypeOrmModule.forFeature([Cita])
  ]
})
export class CitaModule {}
