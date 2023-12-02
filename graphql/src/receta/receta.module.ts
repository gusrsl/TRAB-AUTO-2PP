import { Module } from '@nestjs/common';
import { RecetaService } from './receta.service';
import { RecetaResolver } from './receta.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receta } from './entities/receta.entity';

@Module({
  providers: [RecetaResolver, RecetaService],
  imports:[
    TypeOrmModule.forFeature([Receta])
  ]
})
export class RecetaModule {}
