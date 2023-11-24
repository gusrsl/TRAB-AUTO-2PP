/* eslint-disable prettier/prettier */
// entities/cita.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { MedicoTypeORM } from '../../medico/entities/medico.entity';
import { PacienteTypeORM } from '../../paciente/entities/paciente.entity';

@Entity()
export class CitaTypeORM {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column()
  descripcion: string;

  @ManyToOne(() => PacienteTypeORM, paciente => paciente.citas)
  paciente: PacienteTypeORM;

  @ManyToOne(() => MedicoTypeORM, medico => medico.citas)
  medico: MedicoTypeORM;
}
