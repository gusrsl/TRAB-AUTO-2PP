import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialmedicoDto } from './create-historialmedico.dto';

export class UpdateHistorialmedicoDto extends PartialType(CreateHistorialmedicoDto) {}
