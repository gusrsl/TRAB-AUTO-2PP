/* eslint-disable prettier/prettier */
// entities/resultado-examen.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { LaboratorioTypeORM } from '../../laboratorio/entities/laboratorio.entity';

@Entity()
export class ResultadoExamenTypeORM {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => LaboratorioTypeORM)
  @JoinColumn({ name: 'id_laboratorio' })
  laboratorio: LaboratorioTypeORM;

  @Column()
  descripcion: string;
}
