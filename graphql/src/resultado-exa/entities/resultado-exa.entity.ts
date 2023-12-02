import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'resultadoexa' })
@ObjectType()
export class ResultadoExa {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  resultadoID: string;

  @Column()
  @Field(() => Int)
  laboratorioID: string;

  @Column()
  @Field(() => String)
  pacienteID: string;

  @Column()
  @Field(() => String)
  fechadeexamen: string;

  @Column()
  @Field(() => String)
  resultado: string;

  @Column()
  @Field(() => Int)
  tipo: number;

  @Column({ nullable: true })
  @Field(() => Boolean, { nullable: true })
  estado?: boolean;

}
