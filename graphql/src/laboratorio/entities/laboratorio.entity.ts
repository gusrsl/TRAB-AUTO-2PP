import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'laboratorios' }) // Cambiando el nombre de la entidad a 'laboratorios'
@ObjectType()
export class Laboratorio { // Cambiando el nombre de la clase a 'Laboratorio'
  
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string;
    
    @Column()
    @Field(() => String)
    codigo: string; // Cambiando el nombre del campo 'identificacion' a 'codigo'

    @Column()
    @Field(() => String)
    nombre: string;

    @Column()
    @Field(() => String)
    direccion: string;

    @Column('text', { array: true })
    @Field(() => [String], { nullable: true })
    telefono: string[];

    @Column()
    @Field(() => Int)
    tipo: number;

    @Column()
    @Field(() => Boolean)
    estado: boolean;
}
