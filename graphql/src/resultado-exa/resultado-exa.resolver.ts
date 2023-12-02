import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ResultadoExaService } from './resultado-exa.service'; // Asegúrate de tener el nombre correcto del servicio
import { ResultadoExa } from './entities/resultado-exa.entity'; // Asegúrate de tener el nombre correcto de la entidad
import { UpdateResultadoExaInput, CreateResultadoExaInput } from './dto/inputs'; // Asegúrate de tener el nombre correcto de los DTOs
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => ResultadoExa)
export class ResultadoExaResolver {
  constructor(private readonly resultadoExaService: ResultadoExaService) {}

  @Mutation(() => ResultadoExa)
  async createResultadoExa(@Args('createResultadoExaInput') createResultadoExaInput: CreateResultadoExaInput): Promise<ResultadoExa> {
    return this.resultadoExaService.create(createResultadoExaInput);
  }

  @Query(() => [ResultadoExa], { name: 'resultadosExa' })
  async findAll(): Promise<ResultadoExa[]> {
    return this.resultadoExaService.findAll();
  }

  @Query(() => ResultadoExa, { name: 'resultadoExa' })
  findOne(@Args('id', { type: () => ID }, ParseUUIDPipe) id: string): Promise<ResultadoExa> {
    return this.resultadoExaService.findOne(id);
  }

  @Mutation(() => ResultadoExa)
  updateResultadoExa(@Args('updateResultadoExaInput') updateResultadoExaInput: UpdateResultadoExaInput): Promise<ResultadoExa> {
    return this.resultadoExaService.update(updateResultadoExaInput.id, updateResultadoExaInput);
  }

  @Mutation(() => ResultadoExa)
  removeResultadoExa(@Args('id', { type: () => ID }) id: string): Promise<ResultadoExa> {
    return this.resultadoExaService.remove(id);
  }
}
