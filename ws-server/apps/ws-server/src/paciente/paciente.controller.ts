/* eslint-disable prettier/prettier */
// paciente/paciente.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteTypeORM } from './entities/paciente.entity';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Get()
  async findAll(): Promise<PacienteTypeORM[]> {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<PacienteTypeORM | null> {
    return this.pacienteService.findById(id);
  }

  @Post()
  async create(@Body() pacienteData: PacienteTypeORM): Promise<PacienteTypeORM> {
    return this.pacienteService.create(pacienteData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() pacienteData: PacienteTypeORM): Promise<PacienteTypeORM> {
    return this.pacienteService.update(id, pacienteData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.pacienteService.delete(id);
  }
}
