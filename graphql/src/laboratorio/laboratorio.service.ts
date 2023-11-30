import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLaboratorioInput, UpdateLaboratorioInput } from './dto'; // Cambiando los nombres de los inputs
import { Laboratorio } from './entities/laboratorio.entity'; // Cambiando la referencia de la entidad a 'Laboratorio'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LaboratoriosService { // Cambiando el nombre del servicio a 'LaboratoriosService'

  constructor( 
    @InjectRepository(Laboratorio) // Actualizando la referencia de la entidad a 'Laboratorio'
    private readonly laboratoriosRepository: Repository<Laboratorio> // Actualizando el nombre del repositorio
  ){}

  async create(createLaboratorioInput: CreateLaboratorioInput): Promise<Laboratorio> { // Cambiando el nombre del método y el tipo del input
    const newLaboratorio = this.laboratoriosRepository.create(createLaboratorioInput);
    return await this.laboratoriosRepository.save(newLaboratorio); 
  }

  async findAll(): Promise<Laboratorio[]> { // Cambiando el tipo del retorno
    return this.laboratoriosRepository.find();
  }

  async findOne(id: string): Promise<Laboratorio> { // Cambiando el tipo del retorno
    const laboratorio = await this.laboratoriosRepository.findOne({ where :  {id:id}});
    if (!laboratorio) throw new NotFoundException(`Not found`);
    return laboratorio;
  }

  async update(id: string, updateLaboratorioInput: UpdateLaboratorioInput): Promise<Laboratorio> { // Cambiando el tipo del input
    const laboratorio = await this.laboratoriosRepository.preload({ id, ...updateLaboratorioInput });
    if (!laboratorio) throw new NotFoundException(`Not found`);
    return this.laboratoriosRepository.save(laboratorio);
  }

  async remove(id: string): Promise<Laboratorio> {
    const laboratorio = await this.findOne(id);
    laboratorio.estado = false; // Cambiando el atributo 'estado' a 'false'
    return this.laboratoriosRepository.save(laboratorio);
  }
  
}
