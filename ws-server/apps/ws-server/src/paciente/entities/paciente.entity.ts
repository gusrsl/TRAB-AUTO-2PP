/* eslint-disable prettier/prettier */
// entities/paciente.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { MedicoTypeORM } from '../../medico/entities/medico.entity';
import { HistorialMedicoTypeORM } from '../../historialmedico/entities/historialmedico.entity';
import { CitaTypeORM } from '../../cita/entities/cita.entity';
import { RecetaMedicaTypeORM } from '../../recetamedica/entities/recetamedica.entity';

@Entity()
export class PacienteTypeORM {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  usuario: string;

  @Column()
  contrasena: string;

  @ManyToOne(() => MedicoTypeORM, medico => medico.pacientes)
  @JoinColumn({ name: 'id_medico_responsable' })
  medicoResponsable: MedicoTypeORM;

  @OneToOne(() => HistorialMedicoTypeORM)
  @JoinColumn({ name: 'id_historial_medico' })
  historialMedico: HistorialMedicoTypeORM;

  @OneToMany(() => CitaTypeORM, cita => cita.paciente)
  citas: CitaTypeORM[];

  @OneToMany(() => RecetaMedicaTypeORM, receta => receta.paciente)
  recetas: RecetaMedicaTypeORM[];
}
