// historial_m.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHistorialMInput } from './dto/create-historial_m.input';
import { UpdateHistorialMInput } from './dto/update-historial_m.input';
import { HistorialM } from './entities/historial_m.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HistorialMService {
  constructor(
    @InjectRepository(HistorialM)
    private readonly historialesRepository: Repository<HistorialM>,
  ) {}

  async create(createHistorialInput: CreateHistorialMInput): Promise<HistorialM> {
    const newHistorial = this.historialesRepository.create(createHistorialInput);
    return await this.historialesRepository.save(newHistorial);
  }

  async findAll(): Promise<HistorialM[]> {
    return this.historialesRepository.find({ relations: ['enfermedades'] });
  }

  async findOne(id: string): Promise<HistorialM> {
    const historial = await this.historialesRepository.findOne({ where: { id } });
    if (!historial) throw new NotFoundException(`Historial médico no encontrado`);
    return historial;
  }

  async update(id: string, updateHistorialInput: UpdateHistorialMInput): Promise<HistorialM> {
    const historial = await this.historialesRepository.preload({ id, ...updateHistorialInput });
    if (!historial) throw new NotFoundException(`Historial médico no encontrado`);
    return this.historialesRepository.save(historial);
  }

  async remove(id: string): Promise<HistorialM> {
    const historial = await this.findOne(id);
    await this.historialesRepository.remove(historial);
    return historial;
  }
}
