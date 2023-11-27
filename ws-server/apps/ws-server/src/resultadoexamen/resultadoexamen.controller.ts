/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ResultadoexamenService } from './resultadoexamen.service';

@Controller('resultadoexamen')
export class ResultadoexamenController {
  constructor(private readonly resultadoExamenService: ResultadoexamenService) {}

  @Get()
  findAll() {
    return this.resultadoExamenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resultadoExamenService.findOne(id);
  }

  @Post()
  create(@Body() createResultadoExamenDto: any) {
    return this.resultadoExamenService.create(createResultadoExamenDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateResultadoExamenDto: any) {
    return this.resultadoExamenService.update(id, updateResultadoExamenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resultadoExamenService.remove(id);
  }
}
