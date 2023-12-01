import { IsUUID } from 'class-validator';
import { CreateHistorialMInput } from './create-historial_m.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateHistorialMInput extends PartialType(CreateHistorialMInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
