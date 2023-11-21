/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecetamedicaService } from './recetamedica.service';

@Controller('recetamedica')
export class RecetamedicaController {
  constructor(private readonly recetamedicaService: RecetamedicaService) {}

  @Get()
  findAll() {
    return this.recetamedicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recetamedicaService.findOne(id);
  }

  @Post()
  create(@Body() createRecetaMedicaDto: any) {
    return this.recetamedicaService.create(createRecetaMedicaDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecetaMedicaDto: any) {
    return this.recetamedicaService.update(id, updateRecetaMedicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recetamedicaService.remove(id);
  }
}
