// enfermedad.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnfermedadInput } from './dto/create-enfermedad.input';
import { UpdateEnfermedadInput } from './dto/update-enfermedad.input';
import { Enfermedad } from './entities/enfermedad.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EnfermedadService {
  constructor(
    @InjectRepository(Enfermedad)
    private readonly enfermedadRepository: Repository<Enfermedad>,
  ) {}

  async create(createEnfermedadInput: CreateEnfermedadInput): Promise<Enfermedad> {
    const newEnfermedad = this.enfermedadRepository.create(createEnfermedadInput);
    return await this.enfermedadRepository.save(newEnfermedad);
  }

  async findAll(): Promise<Enfermedad[]> {
    return this.enfermedadRepository.find();
  }

  async findOne(id: string): Promise<Enfermedad> {
    const enfermedad = await this.enfermedadRepository.findOne({ where: { id } });
    if (!enfermedad) throw new NotFoundException(`Enfermedad no encontrada`);
    return enfermedad;
  }

  async update(id: string, updateEnfermedadInput: UpdateEnfermedadInput): Promise<Enfermedad> {
    const enfermedad = await this.enfermedadRepository.preload({ id, ...updateEnfermedadInput });
    if (!enfermedad) throw new NotFoundException(`Enfermedad no encontrada`);
    return this.enfermedadRepository.save(enfermedad);
  }

  async remove(id: string): Promise<Enfermedad> {
    const enfermedad = await this.findOne(id);
    await this.enfermedadRepository.remove(enfermedad);
    return enfermedad;
  }
}
