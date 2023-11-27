/* eslint-disable prettier/prettier */
// entities/medicamento.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { LaboratorioTypeORM } from '../../laboratorio/entities/laboratorio.entity';
import { EnfermedadTypeORM } from '../../enfermedad/entities/enfermedad.entity';

@Entity()
export class MedicamentoTypeORM {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @OneToOne(() => LaboratorioTypeORM)
  @JoinColumn({ name: 'id_laboratorio' })
  laboratorio: LaboratorioTypeORM;

  @OneToOne(() => EnfermedadTypeORM)
  @JoinColumn({ name: 'id_enfermedad' })
  enfermedad: EnfermedadTypeORM;
}
