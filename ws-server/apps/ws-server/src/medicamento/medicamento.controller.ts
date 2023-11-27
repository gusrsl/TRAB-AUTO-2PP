/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MedicamentoService } from './medicamento.service';
import { MedicamentoTypeORM } from './entities/medicamento.entity';

@Controller('medicamento')
export class MedicamentoController {
  constructor(private readonly medicamentoService: MedicamentoService) {}

  @Get()
  async findAll(): Promise<MedicamentoTypeORM[]> {
    return this.medicamentoService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<MedicamentoTypeORM | null> {
    return this.medicamentoService.findById(id);
  }

  @Post()
  async create(@Body() medicamentoData: MedicamentoTypeORM): Promise<MedicamentoTypeORM> {
    return this.medicamentoService.create(medicamentoData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() medicamentoData: MedicamentoTypeORM): Promise<MedicamentoTypeORM> {
    return this.medicamentoService.update(id, medicamentoData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.medicamentoService.delete(id);
  }
}
