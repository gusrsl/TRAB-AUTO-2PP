import { PartialType } from '@nestjs/mapped-types';
import { CreateRecetamedicaDto } from './create-recetamedica.dto';

export class UpdateRecetamedicaDto extends PartialType(CreateRecetamedicaDto) {}
