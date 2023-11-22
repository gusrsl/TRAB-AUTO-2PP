/* eslint-disable prettier/prettier */
// laboratorio/entities/laboratorio.schema.ts
import * as mongoose from 'mongoose';

export const LaboratorioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
});
