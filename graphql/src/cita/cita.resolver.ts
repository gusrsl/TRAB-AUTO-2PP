import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CitaService } from './cita.service';
import { Cita } from './entities/cita.entity';
import { UpdateCitaInput, CreateCitaInput } from './dto';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Cita)
export class CitaResolver {
  constructor(private readonly citaService: CitaService) {}

  @Mutation(() => Cita)
  async createCita(@Args('createCitaInput') createCitaInput: CreateCitaInput)
  :Promise<Cita> {
    return this.citaService.create(createCitaInput);
  }

  @Query(() => [Cita], { name: 'cita' })
  async findAll():Promise<Cita[]> {
    return this.citaService.findAll();
  }

  @Query(() => Cita, { name: 'cita' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Cita> {
    return this.citaService.findOne(id);
  }

  @Mutation(() => Cita)
  updateCita(@Args('updateCitaInput') updateCitaInput: UpdateCitaInput): Promise<Cita> {
    return this.citaService.update(updateCitaInput.id, updateCitaInput);
  }

  @Mutation(() => Cita)
  removeCita(@Args('id', { type: () => ID }) id: string): Promise<Cita> {
    return this.citaService.remove(id);
  }
}
