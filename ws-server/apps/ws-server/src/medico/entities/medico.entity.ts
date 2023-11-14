/* eslint-disable prettier/prettier */
// entities/medico.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { CitaTypeORM } from '../../cita/entities/cita.entity';
import { LicenciaTypeORM } from '../../licencia/entities/licencia.entity';
import { PacienteTypeORM } from '../../paciente/entities/paciente.entity';
import { HistorialMedicoTypeORM } from '../../historialmedico/entities/historialmedico.entity';


@Entity()
export class MedicoTypeORM {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  usuario: string;

  @Column()
  password: string;

  @OneToOne(() => LicenciaTypeORM)
  @JoinColumn({ name: 'id_licencia' })
  licencia: LicenciaTypeORM;

  @OneToMany(() => CitaTypeORM, cita => cita.medico)
  citas: CitaTypeORM[];

  @OneToMany(() => PacienteTypeORM, paciente => paciente.medicoResponsable)
  pacientes: PacienteTypeORM[];

  @OneToOne(() => HistorialMedicoTypeORM)
  @JoinColumn({ name: 'id_historial_medico' })
  historialMedico: HistorialMedicoTypeORM;
}