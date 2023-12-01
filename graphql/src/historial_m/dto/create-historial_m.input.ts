// create-historial_m.input.ts
import { Field, ID, Int, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';
import { CreateEnfermedadInput } from '../../enfermedad/dto/create-enfermedad.input';

@InputType()
export class CreateHistorialMInput {
  @Field()
  @IsNotEmpty()
  sintomas: string;

  @Field()
  @IsNotEmpty()
  diagnostico: string;

  @Field(() => [String], { nullable: true })
  @IsNotEmpty()
  medicamentos: string[];

  @Field(() => Int)
  @IsPositive()
  doctorId: number;

  @Field()
  @IsOptional()
  estaInternado: boolean;

  @Field(() => [CreateEnfermedadInput], { nullable: true })
  @IsOptional()
  enfermedades: CreateEnfermedadInput[];
}
