import { Module } from '@nestjs/common';
import { EnfermedadService } from './enfermedad.service';
import { EnfermedadResolver } from './enfermedad.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enfermedad } from './entities/enfermedad.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Enfermedad])
  ],
  providers: [EnfermedadResolver, EnfermedadService]
})
export class EnfermedadModule {}
