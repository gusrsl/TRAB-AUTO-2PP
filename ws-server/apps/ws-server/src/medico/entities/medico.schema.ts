/* eslint-disable prettier/prettier */
// schemas/medico.schema.ts
import * as mongoose from 'mongoose';

export const MedicoSchema = new mongoose.Schema({
  usuario: { type: String, required: true },
  password: { type: String, required: true },
  nombre: { type: String, required: true },
  especialidad: { type: String, required: true },
  mail: { type: String, required: true },
  celular: { type: String, required: true },
  // Puedes agregar más propiedades según tus necesidades
});
