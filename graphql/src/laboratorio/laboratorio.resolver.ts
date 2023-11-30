import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql'; // Eliminando la importación redundante de Int
import { LaboratoriosService } from './laboratorio.service'; // Cambiando el nombre del servicio a 'LaboratoriosService'
import { Laboratorio } from './entities/laboratorio.entity'; // Cambiando la referencia de la entidad a 'Laboratorio'
import { UpdateLaboratorioInput, CreateLaboratorioInput } from './dto'; // Cambiando los nombres de los inputs

@Resolver(() => Laboratorio)
export class LaboratoriosResolver { // Cambiando el nombre del resolver a 'LaboratoriosResolver'
  constructor(private readonly laboratoriosService: LaboratoriosService) {} // Actualizando el nombre del servicio

  @Mutation(() => Laboratorio)
  async createLaboratorio(@Args('createLaboratorioInput') createLaboratorioInput: CreateLaboratorioInput): Promise<Laboratorio> {
    return this.laboratoriosService.create(createLaboratorioInput);
  }

  @Query(() => [Laboratorio], { name: 'laboratorios' }) // Cambiando el nombre del query a 'laboratorios'
  async findAllLaboratorios(): Promise<Laboratorio[]> { // Cambiando el nombre del método a 'findAllLaboratorios'
    return this.laboratoriosService.findAll();
  }

  @Query(() => Laboratorio, { name: 'laboratorio' }) // Cambiando el nombre del query a 'laboratorio'
  findLaboratorioById(@Args('id', { type: () => ID }) id: string): Promise<Laboratorio> { // Cambiando el nombre del método a 'findLaboratorioById'
    return this.laboratoriosService.findOne(id);
  }

  @Mutation(() => Laboratorio)
  updateLaboratorio(@Args('updateLaboratorioInput') updateLaboratorioInput: UpdateLaboratorioInput): Promise<Laboratorio> {
    return this.laboratoriosService.update(updateLaboratorioInput.id, updateLaboratorioInput);
  }

  @Mutation(() => Laboratorio)
  removeLaboratorio(@Args('id', { type: () => ID }) id: string): Promise<Laboratorio> {
    return this.laboratoriosService.remove(id);
  }
}
