/* eslint-disable prettier/prettier */
// medico/entities/historial-medico.schema.ts
import * as mongoose from 'mongoose';

export const HistorialMedicoSchema = new mongoose.Schema({
  descripcion: { type: String },
  id_paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
  id_medico: { type: mongoose.Schema.Types.ObjectId, ref: 'Medico', required: true },
});