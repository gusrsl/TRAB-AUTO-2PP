import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { RecetaService } from './receta.service';
import { Receta } from './entities/receta.entity';
import { UpdateRecetaInput, CreateRecetaInput } from './dto';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Receta)
export class RecetaResolver {
  constructor(private readonly recetaService: RecetaService) {}

  @Mutation(() => Receta)
  async createReceta(@Args('createRecetaInput') createRecetaInput: CreateRecetaInput)
  :Promise<Receta> {
    return this.recetaService.create(createRecetaInput);
  }

  @Query(() => [Receta], { name: 'receta' })
  async findAll():Promise<Receta[]> {
    return this.recetaService.findAll();
  }

  @Query(() => Receta, { name: 'receta' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Receta> {
    return this.recetaService.findOne(id);
  }

  @Mutation(() => Receta)
  updateReceta(@Args('updateRecetaInput') updateRecetaInput: UpdateRecetaInput): Promise<Receta> {
    return this.recetaService.update(updateRecetaInput.id, updateRecetaInput);
  }

  @Mutation(() => Receta)
  removeReceta(@Args('id', { type: () => ID }) id: string): Promise<Receta> {
    return this.recetaService.remove(id);
  }
}
