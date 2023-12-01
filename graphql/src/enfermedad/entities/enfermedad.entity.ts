// enfermedad.entity.ts
import { Field, Int, ObjectType, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { HistorialM } from '../../historial_m/entities/historial_m.entity';

@Entity({ name: 'enfermedades' })
@ObjectType()
export class Enfermedad {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  nombre: string;

  @ManyToOne(() => HistorialM, historial => historial.enfermedades, { onDelete: 'CASCADE' })
  historial: HistorialM;
}