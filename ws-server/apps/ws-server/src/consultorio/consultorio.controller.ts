/* eslint-disable prettier/prettier */
// consultorio/consultorio.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ConsultorioService } from './consultorio.service';
import { ConsultorioTypeORM } from './entities/consultorio.entity';

@Controller('consultorio')
export class ConsultorioController {
  constructor(private readonly consultorioService: ConsultorioService) {}

  @Get()
  async findAll(): Promise<ConsultorioTypeORM[]> {
    return this.consultorioService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ConsultorioTypeORM | null> {
    return this.consultorioService.findById(id);
  }

  @Post()
  async create(@Body() consultorioData: ConsultorioTypeORM): Promise<ConsultorioTypeORM> {
    return this.consultorioService.create(consultorioData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() consultorioData: ConsultorioTypeORM): Promise<ConsultorioTypeORM> {
    return this.consultorioService.update(id, consultorioData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.consultorioService.delete(id);
  }
}
