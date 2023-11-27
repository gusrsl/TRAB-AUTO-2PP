/* eslint-disable prettier/prettier */
// licencia.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LicenciaService } from './licencia.service';
import { LicenciaTypeORM } from './entities/licencia.entity';

@Controller('licencia')
export class LicenciaController {
  constructor(private readonly licenciaService: LicenciaService) {}

  @Get()
  async findAll(): Promise<LicenciaTypeORM[]> {
    return this.licenciaService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<LicenciaTypeORM | null> {
    return this.licenciaService.findById(id);
  }

  @Post()
  async create(@Body() licenciaData: LicenciaTypeORM): Promise<LicenciaTypeORM> {
    return this.licenciaService.create(licenciaData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() licenciaData: LicenciaTypeORM): Promise<LicenciaTypeORM> {
    return this.licenciaService.update(id, licenciaData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.licenciaService.delete(id);
  }
}
