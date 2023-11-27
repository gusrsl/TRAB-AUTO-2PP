/* eslint-disable prettier/prettier */
// medico/entities/enfermedad.schema.ts
import * as mongoose from 'mongoose';

export const EnfermedadSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
});