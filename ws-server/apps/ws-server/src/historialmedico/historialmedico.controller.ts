/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { HistorialmedicoService } from './historialmedico.service';
import { HistorialMedicoTypeORM } from './entities/historialmedico.entity';

@Controller('historialmedico')
export class HistorialmedicoController {
  constructor(private readonly historialMedicoService: HistorialmedicoService) {}

  @Get()
  async findAll(): Promise<HistorialMedicoTypeORM[]> {
    return this.historialMedicoService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<HistorialMedicoTypeORM | null> {
    return this.historialMedicoService.findById(id);
  }

  @Post()
  async create(@Body() historialMedicoData: HistorialMedicoTypeORM): Promise<HistorialMedicoTypeORM> {
    return this.historialMedicoService.create(historialMedicoData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() historialMedicoData: HistorialMedicoTypeORM): Promise<HistorialMedicoTypeORM> {
    return this.historialMedicoService.update(id, historialMedicoData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.historialMedicoService.delete(id);
  }
}
