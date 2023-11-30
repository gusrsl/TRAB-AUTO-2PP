import { IsUUID } from 'class-validator';
import { CreateLaboratorioInput } from './create-laboratorio.input'; // Cambiando la importación al archivo correspondiente
import { InputType, Field, ID } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types'; // Importando PartialType

@InputType()
export class UpdateLaboratorioInput extends PartialType(CreateLaboratorioInput) { // Cambiando el nombre de la clase a 'UpdateLaboratorioInput' y extendiendo de 'CreateLaboratorioInput'

  @Field(() => ID)
  @IsUUID()
  id: string;
}
