import { Module } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { MedicoResolver } from './medico.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medico } from './entities/medico.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Medico])
  ],
  providers: [MedicoResolver, MedicoService]
})
export class MedicoModule {}
