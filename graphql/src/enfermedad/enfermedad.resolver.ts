// enfermedad.resolver.ts
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { EnfermedadService } from './enfermedad.service';
import { CreateEnfermedadInput } from './dto/create-enfermedad.input';
import { UpdateEnfermedadInput } from './dto/update-enfermedad.input';
import { Enfermedad } from './entities/enfermedad.entity';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver('Enfermedad')
export class EnfermedadResolver {
  constructor(private readonly enfermedadService: EnfermedadService) {}

  @Mutation(() => Enfermedad)
  async createEnfermedad(@Args('createEnfermedadInput') createEnfermedadInput: CreateEnfermedadInput): Promise<Enfermedad> {
    return this.enfermedadService.create(createEnfermedadInput);
  }

  @Query(() => [Enfermedad], { name: 'enfermedades' })
  async findAll(): Promise<Enfermedad[]> {
    return this.enfermedadService.findAll();
  }

  @Query(() => Enfermedad, { name: 'enfermedad' })
  async findOne(@Args('id', { type: () => ID }, ParseUUIDPipe) id: string): Promise<Enfermedad> {
    return this.enfermedadService.findOne(id);
  }

  @Mutation(() => Enfermedad)
  async updateEnfermedad(@Args('updateEnfermedadInput') updateEnfermedadInput: UpdateEnfermedadInput): Promise<Enfermedad> {
    return this.enfermedadService.update(updateEnfermedadInput.id, updateEnfermedadInput);
  }

  @Mutation(() => Enfermedad)
  async removeEnfermedad(@Args('id', { type: () => ID }) id: string): Promise<Enfermedad> {
    return this.enfermedadService.remove(id);
  }
}
