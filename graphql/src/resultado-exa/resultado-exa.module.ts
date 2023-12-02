import { Module } from '@nestjs/common';
import { ResultadoExaService } from './resultado-exa.service'; 
import { ResultadoExaResolver } from './resultado-exa.resolver'; 
import { ResultadoExa } from './entities/resultado-exa.entity'; 
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ResultadoExaResolver, ResultadoExaService],
  imports: [
    TypeOrmModule.forFeature([ResultadoExa])
  ]
})
export class ResultadoExaModule {}
