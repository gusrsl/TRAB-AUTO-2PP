import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateLaboratorioInput { // Cambiando el nombre de la clase a 'CreateLaboratorioInput'

  @Field(() => String)
  @IsNotEmpty()
  codigo: string; // Cambiando el nombre del campo 'identificacion' a 'codigo'

  @Field(() => String)
  @IsNotEmpty()
  nombre: string;

  @Field(() => String)
  @IsNotEmpty()
  direccion: string;

  @Field(() => [String], { nullable: true })
  @IsNotEmpty()
  telefono: string[];

  @Field(() => Int)
  @IsPositive()
  tipo: number;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  estado: boolean | null; // Haciendo que el campo 'estado' sea opcional
}
