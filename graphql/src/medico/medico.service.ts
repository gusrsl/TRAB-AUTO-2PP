import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMedicoInput, UpdateMedicoInput } from './dto/';
import { Medico } from './entities/medico.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MedicoService {

  constructor(
    @InjectRepository(Medico)
    private readonly medicoRepository: Repository<Medico>,
  ) {}

  async create(createMedicoInput: CreateMedicoInput): Promise<Medico> {
    const newMedico = this.medicoRepository.create(createMedicoInput);
    return await this.medicoRepository.save(newMedico);
  }

  async findAll(): Promise<Medico[]> {
    return this.medicoRepository.find();
  }

  async findOne(id: string): Promise<Medico> {
    const medico = await this.medicoRepository.findOne({ where: { id: id } });
    if (!medico) throw new NotFoundException(`Medico not found`);
    return medico;
  }

  async update(id: string, updateMedicoInput: UpdateMedicoInput): Promise<Medico> {
    const medico = await this.medicoRepository.preload({
      id: id,
      ...updateMedicoInput,
    });
    if (!medico) throw new NotFoundException(`Medico not found`);
    return this.medicoRepository.save(medico);
  }

  // medico.service.ts
async remove(id: string): Promise<Medico> {
  const medico = await this.findOne(id);
  medico.disponible = false;
  return this.medicoRepository.save(medico);
}
}
