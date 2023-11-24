/* eslint-disable prettier/prettier */
// create-cita.dto.ts
export class CreateCitaDto {
    readonly fecha: Date;
    readonly descripcion: string;
    readonly id_paciente: string;
    readonly id_medico: string;
  }