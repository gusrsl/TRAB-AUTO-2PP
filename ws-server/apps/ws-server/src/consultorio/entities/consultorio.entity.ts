/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// entities/consultorio.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, ManyToMany } from 'typeorm';
import { PacienteTypeORM } from '../../paciente/entities/paciente.entity';

@Entity()
export class ConsultorioTypeORM {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @OneToOne(() => PacienteTypeORM)
  @JoinColumn({ name: 'id_paciente_responsable' })
  pacienteResponsable: PacienteTypeORM;
}
