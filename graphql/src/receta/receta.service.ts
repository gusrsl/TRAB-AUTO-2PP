import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecetaInput, UpdateRecetaInput } from './dto';
import { Receta } from './entities/receta.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RecetaService {

  constructor( 
    @InjectRepository(Receta)
    private readonly recetaRepository:Repository<Receta> ){}

  async create(createRecetaInput: CreateRecetaInput): Promise<Receta>  {
    const newReceta= this.recetaRepository.create(createRecetaInput);
    return await this.recetaRepository.save(newReceta); 
  }

  async findAll(): Promise<Receta[]> {
    return this.recetaRepository.find();
  }

  async findOne(id: string): Promise<Receta> {
     const receta= await  this.recetaRepository.findOne({where: { id:id }});
     if (!receta) throw new NotFoundException(`Not found`)
     return receta;
  }

  async update(id: string, updateRecetaInput: UpdateRecetaInput): Promise<Receta> {
    
    const receta = await this.recetaRepository.preload(updateRecetaInput);
    if (!receta) throw new NotFoundException(`Not found`)
    return this.recetaRepository.save(receta);

  }

  async remove (id: string): Promise<Receta>{
    const receta = await this.findOne(id);
    receta.estado = false;
    return this.recetaRepository.save(receta);
}

}
