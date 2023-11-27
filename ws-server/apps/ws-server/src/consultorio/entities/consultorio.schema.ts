/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ConsultorioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  id_medico_responsable: { type: mongoose.Schema.Types.ObjectId, ref: 'Medico', required: true },
  id_paciente_responsable: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' },
});