/* eslint-disable prettier/prettier */
// entities/licencia.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { MedicoTypeORM } from '../../medico/entities/medico.entity';
import { ConsultorioTypeORM } from '../../consultorio/entities/consultorio.entity';

@Entity()
export class LicenciaTypeORM {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  numero: string;

  @OneToOne(() => MedicoTypeORM)
  @JoinColumn({ name: 'id_medico' })
  medico: MedicoTypeORM;

  @OneToOne(() => ConsultorioTypeORM)
  @JoinColumn({ name: 'id_consultorio' })
  consultorio: ConsultorioTypeORM;
}
