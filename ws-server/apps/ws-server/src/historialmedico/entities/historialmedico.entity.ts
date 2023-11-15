/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// entities/historial-medico.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { PacienteTypeORM } from '../../paciente/entities/paciente.entity';
import { MedicoTypeORM } from '../../medico/entities/medico.entity';

@Entity()
export class HistorialMedicoTypeORM {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  descripcion: string;

  @OneToOne(() => PacienteTypeORM)
  @JoinColumn({ name: 'id_paciente' })
  paciente: PacienteTypeORM;

  @OneToOne(() => MedicoTypeORM)
  @JoinColumn({ name: 'id_medico' })
  medico: MedicoTypeORM;
}
