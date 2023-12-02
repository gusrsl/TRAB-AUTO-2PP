import { IsUUID } from 'class-validator';
import { CreateCitaInput } from './create-cita.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCitaInput extends PartialType(CreateCitaInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;
  
}

