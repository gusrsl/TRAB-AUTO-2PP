import { IsUUID } from 'class-validator';
import { CreateRecetaInput } from './create-receta.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateRecetaInput extends PartialType(CreateRecetaInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;
  
}

