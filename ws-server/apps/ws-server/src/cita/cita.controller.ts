/* eslint-disable prettier/prettier */
// cita.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CitaTypeORM } from './entities/cita.entity';

@Controller('cita')
export class CitaController {
  constructor(private readonly citaService: CitaService) {}

  @Get()
  async findAll(): Promise<CitaTypeORM[]> {
    return this.citaService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<CitaTypeORM | null> {
    return this.citaService.findById(id);
  }

  @Post()
  async create(@Body() citaData: CitaTypeORM): Promise<CitaTypeORM> {
    return this.citaService.create(citaData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() citaData: CitaTypeORM): Promise<CitaTypeORM> {
    return this.citaService.update(id, citaData);
  }

  
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.citaService.delete(id);
  }
}
