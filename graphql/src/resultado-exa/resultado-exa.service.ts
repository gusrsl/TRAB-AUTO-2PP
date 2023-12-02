import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResultadoExaInput, UpdateResultadoExaInput } from './dto/inputs'; // Asegúrate de tener el nombre correcto de los DTOs
import { ResultadoExa } from './entities/resultado-exa.entity'; // Asegúrate de tener el nombre correcto de la entidad
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ResultadoExaService {

  constructor( 
    @InjectRepository(ResultadoExa)
    private readonly resultadoExaRepository: Repository<ResultadoExa>,
  ){}

  async create(createResultadoExaInput: CreateResultadoExaInput): Promise<ResultadoExa> {
    const newResultadoExa = this.resultadoExaRepository.create(createResultadoExaInput);
    return await this.resultadoExaRepository.save(newResultadoExa);
  }

  async findAll(): Promise<ResultadoExa[]> {
    return this.resultadoExaRepository.find();
  }

  async findOne(id: string): Promise<ResultadoExa> {
    const resultadoExa = await this.resultadoExaRepository.findOne({ where :  {id:id}});
    if (!resultadoExa) throw new NotFoundException(`Not found`);
    return resultadoExa;
  }

  async update(id: string, updateResultadoExaInput: UpdateResultadoExaInput): Promise<ResultadoExa> {
    const resultadoExa = await this.resultadoExaRepository.preload({ id, ...updateResultadoExaInput });
    if (!resultadoExa) throw new NotFoundException(`Not found`);
    return this.resultadoExaRepository.save(resultadoExa);
  }

  async remove(id: string): Promise<ResultadoExa> {
    const resultadoExa = await this.findOne(id);
    resultadoExa.estado= false;
    return this.resultadoExaRepository.save(resultadoExa);
  }
  
}
