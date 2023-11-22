/* eslint-disable prettier/prettier */
// laboratorio/laboratorio.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LaboratorioService } from './laboratorio.service';
import { LaboratorioTypeORM } from './entities/laboratorio.entity';

@Controller('laboratorio')
export class LaboratorioController {
  constructor(private readonly laboratorioService: LaboratorioService) {}

  @Get()
  async findAll(): Promise<LaboratorioTypeORM[]> {
    return this.laboratorioService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<LaboratorioTypeORM | null> {
    return this.laboratorioService.findById(id);
  }

  @Post()
  async create(@Body() laboratorioData: LaboratorioTypeORM): Promise<LaboratorioTypeORM> {
    return this.laboratorioService.create(laboratorioData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() laboratorioData: LaboratorioTypeORM): Promise<LaboratorioTypeORM> {
    return this.laboratorioService.update(id, laboratorioData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.laboratorioService.delete(id);
  }
}
