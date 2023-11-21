/* eslint-disable prettier/prettier */
// entities/receta-medica.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { MedicoTypeORM } from '../../medico/entities/medico.entity';
import { PacienteTypeORM } from '../../paciente/entities/paciente.entity';
import { MedicamentoTypeORM } from '../../medicamento/entities/medicamento.entity';
import { EnfermedadTypeORM } from '../../enfermedad/entities/enfermedad.entity';


@Entity()
export class RecetaMedicaTypeORM {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => MedicoTypeORM)
  @JoinColumn({ name: 'id_medico' })
  medico: MedicoTypeORM;

  @OneToOne(() => PacienteTypeORM)
  @JoinColumn({ name: 'id_paciente' })
  paciente: PacienteTypeORM;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @OneToOne(() => MedicamentoTypeORM)
  @JoinColumn({ name: 'id_medicamento' })
  medicamento: MedicamentoTypeORM;

  @OneToOne(() => EnfermedadTypeORM)
  @JoinColumn({ name: 'id_enfermedad' })
  enfermedad: EnfermedadTypeORM;
}
