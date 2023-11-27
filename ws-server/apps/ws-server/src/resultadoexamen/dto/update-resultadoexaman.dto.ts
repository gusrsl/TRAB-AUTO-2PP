import { PartialType } from '@nestjs/mapped-types';
import { CreateResultadoexamanDto } from './create-resultadoexaman.dto';

export class UpdateResultadoexamanDto extends PartialType(CreateResultadoexamanDto) {}
