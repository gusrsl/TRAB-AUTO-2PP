/* eslint-disable prettier/prettier */
// schemas/cita.schema.ts
import * as mongoose from 'mongoose';

export const CitaSchema = new mongoose.Schema({
  fecha: { type: Date, required: true },
  descripcion: { type: String, required: true },
  id_paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
  id_medico: { type: mongoose.Schema.Types.ObjectId, ref: 'Medico', required: true },
});