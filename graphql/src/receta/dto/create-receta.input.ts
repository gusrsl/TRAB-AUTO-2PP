import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive, IsUUID } from 'class-validator';

@InputType()

export class CreateRecetaInput {
    
    @Field(() => ID)
    @IsUUID()
    id: string;

    @Field(()=>String )
    @IsNotEmpty()
    identificacion:string;
  
    @Field(()=>String )
    @IsNotEmpty()
    nombre:string;
  
    @Field(()=>String )
    @IsNotEmpty()
    direccion:string;
  
    @Field(()=>[String], {nullable:true} )
    @IsNotEmpty()
    telefono:string[];
  
    @Field(()=>Int )
    @IsPositive()
    tipo: number;
  
    @Field(()=>Boolean )
    @IsOptional()
    estado:boolean;


}
