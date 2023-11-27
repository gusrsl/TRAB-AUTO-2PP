/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const LicenciaSchema = new mongoose.Schema({
  numero: { type: String, required: true },
  id_medico: { type: mongoose.Schema.Types.ObjectId, ref: 'Medico', required: true },
  id_consultorio: { type: mongoose.Schema.Types.ObjectId, ref: 'Consultorio', required: true },
});
