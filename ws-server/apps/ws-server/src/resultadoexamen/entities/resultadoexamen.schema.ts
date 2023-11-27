/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const ResultadoExamenSchema = new Schema({
  laboratorio: {
    type: Schema.Types.ObjectId,
    ref: 'Laboratorio',
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});
