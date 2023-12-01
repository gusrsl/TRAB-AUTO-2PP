import { Module } from '@nestjs/common';
import { HistorialMService } from './historial_m.service';
import { HistorialMResolver } from './historial_m.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialM } from './entities/historial_m.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([HistorialM])
  ],
  providers: [HistorialMResolver, HistorialMService]
})
export class HistorialMModule {}
