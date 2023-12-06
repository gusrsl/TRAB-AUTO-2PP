import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCitaInput, UpdateCitaInput } from './dto';
import { Cita } from './entities/cita.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CitaService {

  constructor( 
    @InjectRepository(Cita)
    private readonly citaRepository:Repository<Cita> ){}

  async create(createCitaInput: CreateCitaInput): Promise<Cita>  {
    const newCita= this.citaRepository.create(createCitaInput);
    return await this.citaRepository.save(newCita); 
  }

  async findAll(): Promise<Cita[]> {
    return this.citaRepository.find();
  }

  async findOne(id: string): Promise<Cita> {
     const cita= await  this.citaRepository.findOne({where: { id:id }});
     if (!cita) throw new NotFoundException(`Not found`)
     return cita;
  }

  async update(id: string, updateCitaInput: UpdateCitaInput): Promise<Cita> {
    
    const cita = await this.citaRepository.preload(updateCitaInput);
    if (!cita) throw new NotFoundException(`Not found`)
    return this.citaRepository.save(cita);

  }

  async remove (id: string): Promise<Cita>{
    const cita = await this.findOne(id);
    cita.estado = false;
    return this.citaRepository.save(cita);
}


  // async remove(id: string): Promise<Cita> {
  //   const cita= await  this.findOne(id);
  //   await this.citaRepository.remove(cita);
  //   return {...cita, id};
  // }
}
