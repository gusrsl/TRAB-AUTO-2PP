import { IsUUID } from 'class-validator';
import { CreateMedicoInput } from './create-medico.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateMedicoInput extends PartialType(CreateMedicoInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;
  
}
