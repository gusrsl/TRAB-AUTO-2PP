import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateResultadoExaInput {

  @Field(() => String)
  @IsNotEmpty()
  resultadoID: string;

  @Field(() => String)
  @IsNotEmpty()
  laboratorioID: string;

  @Field(() => String)
  @IsNotEmpty()
  pacienteID: string;

  @Field(() => String)
  @IsNotEmpty()
  fechadeexamen: string;

  @Field(() => String)
  @IsNotEmpty()
  resultado: string;

  @Field(() => Int)
  @IsPositive()
  tipo: number;

  @Field(() => Boolean)
  @IsOptional()
  estado?: boolean;

}
