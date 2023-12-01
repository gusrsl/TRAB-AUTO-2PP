// update-enfermedad.input.ts
import { IsUUID } from 'class-validator';
import { CreateEnfermedadInput } from './create-enfermedad.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateEnfermedadInput extends PartialType(CreateEnfermedadInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}