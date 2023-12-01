import { Field, Int, ObjectType, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Enfermedad } from '../../enfermedad/entities/enfermedad.entity';

@Entity({ name: 'historial_m' })
@ObjectType()
export class HistorialM {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  sintomas: string;

  @Column()
  @Field(() => String)
  diagnostico: string;

  @Column('text', { array: true, nullable: true })
  @Field(() => [String], { nullable: true })
  medicamentos: string[];

  @Column({ type: 'int' })
  @Field(() => Int)
  doctorId: number;

  @Column({ type: 'boolean', default: false })
  @Field(() => Boolean)
  estaInternado: boolean;

  @OneToMany(() => Enfermedad, enfermedad => enfermedad.historial, { cascade: true })
  @Field(() => [Enfermedad], { nullable: true })
  enfermedades: Enfermedad[];
}