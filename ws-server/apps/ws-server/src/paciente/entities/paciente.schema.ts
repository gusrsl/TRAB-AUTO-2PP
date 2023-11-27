/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const PacienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  usuario: { type: String, required: true },
  contrasena: { type: String, required: true },
  id_medico_responsable: { type: mongoose.Schema.Types.ObjectId, ref: 'Medico', required: true },
  id_historial_medico: { type: mongoose.Schema.Types.ObjectId, ref: 'Historialmedico', required: true },
  citas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cita' }],
  recetas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recetamedica' }],
});
