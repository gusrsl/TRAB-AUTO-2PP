

import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'students'})
@ObjectType()

export class Cita {
  
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
    fechayhora_cita:string;

    @Column()
    @Field(()=>Boolean)
    estado:boolean;


}
