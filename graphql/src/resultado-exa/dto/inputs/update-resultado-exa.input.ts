import { IsUUID } from 'class-validator';
import { CreateResultadoExaInput } from './create-resultado-exa.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateResultadoExaInput extends PartialType(CreateResultadoExaInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;

}
