/* eslint-disable prettier/prettier */
// medico.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { MedicoTypeORM } from './entities/medico.entity';

@Controller('medico')
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

  @Get()
  async findAll(): Promise<MedicoTypeORM[]> {
    return this.medicoService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<MedicoTypeORM | null> {
    return this.medicoService.findById(id);
  }

  @Post()
  async create(@Body() medicoData: MedicoTypeORM): Promise<MedicoTypeORM> {
    return this.medicoService.create(medicoData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() medicoData: MedicoTypeORM): Promise<MedicoTypeORM> {
    return this.medicoService.update(id, medicoData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.medicoService.delete(id);
  }
}
