/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const MedicamentoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  id_laboratorio: { type: mongoose.Schema.Types.ObjectId, ref: 'Laboratorio', required: true },
  id_enfermedad: { type: mongoose.Schema.Types.ObjectId, ref: 'Enfermedad', required: true },
});
