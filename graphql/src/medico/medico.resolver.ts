import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { MedicoService } from './medico.service';
import { Medico } from './entities/medico.entity';
import { ParseUUIDPipe } from '@nestjs/common';
import { UpdateMedicoInput } from './dto/update-medico.input';
import { CreateMedicoInput } from './dto/create-medico.input';

@Resolver(() => Medico)
export class MedicoResolver {
  constructor(private readonly medicoService: MedicoService) {}

  @Mutation(() => Medico)
  async createMedico(@Args('createMedicoInput') createMedicoInput: CreateMedicoInput): Promise<Medico> {
    return this.medicoService.create(createMedicoInput);
  }

  @Query(() => [Medico], { name: 'medicos' })
  async findAll(): Promise<Medico[]> {
    return this.medicoService.findAll();
  }

  @Query(() => Medico, { name: 'medico' })
  findOne(@Args('id', { type: () => ID }, ParseUUIDPipe) id: string): Promise<Medico> {
    return this.medicoService.findOne(id);
  }

  @Mutation(() => Medico)
  updateMedico(@Args('updateMedicoInput') updateMedicoInput: UpdateMedicoInput): Promise<Medico> {
    return this.medicoService.update(updateMedicoInput.id, updateMedicoInput);
  }

  @Mutation(() => Medico)
  removeMedico(@Args('id', { type: () => ID }) id: string): Promise<Medico> {
    return this.medicoService.remove(id);
  }
}
