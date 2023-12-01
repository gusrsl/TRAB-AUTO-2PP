// create-enfermedad.input.ts
import { Field, InputType, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateEnfermedadInput {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string;

  @Field(() => ID)
  @IsNotEmpty()
  historialId: string; // Debes proporcionar el ID del historial médico al crear la enfermedad
}