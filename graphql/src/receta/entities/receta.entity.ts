

import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'recetas'})
@ObjectType()

export class Receta {
  
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    @Column()
    @Field(()=> String)
    paciente_id:string;

    @Column()
    @Field(()=>String)
    medico_id:string;

    @Column()
    @Field(()=>String)
    fechayhora_receta:string;

    @Column()
    @Field(()=>Boolean)
    estado:boolean;


}
