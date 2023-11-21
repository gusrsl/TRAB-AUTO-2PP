/* eslint-disable prettier/prettier */
// recetamedica/entities/receta-medica.schema.ts
import * as mongoose from 'mongoose';

export const RecetaMedicaSchema = new mongoose.Schema({
  id_medico: { type: mongoose.Schema.Types.ObjectId, ref: 'Medico', required: true },
  id_paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
  fecha: { type: Date, required: true },
  id_medicamento: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicamento', required: true },
  id_enfermedad: { type: mongoose.Schema.Types.ObjectId, ref: 'Enfermedad', required: true },
});
