// historial_m.resolver.ts
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { HistorialMService } from './historial_m.service';
import { CreateHistorialMInput } from './dto/create-historial_m.input';
import { UpdateHistorialMInput } from './dto/update-historial_m.input';
import { HistorialM } from './entities/historial_m.entity';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver('HistorialM')
export class HistorialMResolver {
  constructor(private readonly historialesService: HistorialMService) {}

  @Mutation(() => HistorialM)
  async createHistorial(@Args('createHistorialInput') createHistorialInput: CreateHistorialMInput): Promise<HistorialM> {
    return this.historialesService.create(createHistorialInput);
  }

  @Query(() => [HistorialM], { name: 'historiales' })
  async findAll(): Promise<HistorialM[]> {
    return this.historialesService.findAll();
  }

  @Query(() => HistorialM, { name: 'historial' })
  async findOne(@Args('id', { type: () => ID }, ParseUUIDPipe) id: string): Promise<HistorialM> {
    return this.historialesService.findOne(id);
  }

  @Mutation(() => HistorialM)
  async updateHistorial(@Args('updateHistorialInput') updateHistorialInput: UpdateHistorialMInput): Promise<HistorialM> {
    return this.historialesService.update(updateHistorialInput.id, updateHistorialInput );
  }

  @Mutation(() => HistorialM)
  async removeHistorial(@Args('id', { type: () => ID }) id: string): Promise<HistorialM> {
    return this.historialesService.remove(id);
  }
}
