import { Module } from '@nestjs/common';
import { LaboratoriosService } from './laboratorio.service'; // Cambiando el nombre del servicio a 'LaboratoriosService'
import { LaboratoriosResolver } from './laboratorio.resolver'; // Cambiando el nombre del resolver a 'LaboratoriosResolver'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Laboratorio } from './entities/laboratorio.entity'; // Cambiando la referencia de la entidad a 'Laboratorio'

@Module({
  providers: [LaboratoriosResolver, LaboratoriosService], // Actualizando los nombres de los proveedores
  imports:[
    TypeOrmModule.forFeature([Laboratorio]) // Actualizando la referencia de la entidad a 'Laboratorio'
  ]
})
export class LaboratorioModule {} // Cambiando el nombre del módulo a 'LaboratorioModule'
