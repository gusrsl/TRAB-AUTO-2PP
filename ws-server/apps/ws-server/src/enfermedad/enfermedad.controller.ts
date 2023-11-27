/* eslint-disable prettier/prettier */
// enfermedad/enfermedad.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EnfermedadService } from './enfermedad.service';
import { EnfermedadTypeORM } from './entities/enfermedad.entity';

@Controller('enfermedad')
export class EnfermedadController {
  constructor(private readonly enfermedadService: EnfermedadService) {}

  @Get()
  async findAll(): Promise<EnfermedadTypeORM[]> {
    return this.enfermedadService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<EnfermedadTypeORM | null> {
    return this.enfermedadService.findById(id);
  }

  @Post()
  async create(@Body() enfermedadData: EnfermedadTypeORM): Promise<EnfermedadTypeORM> {
    return this.enfermedadService.create(enfermedadData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() enfermedadData: EnfermedadTypeORM): Promise<EnfermedadTypeORM> {
    return this.enfermedadService.update(id, enfermedadData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.enfermedadService.delete(id);
  }
}
