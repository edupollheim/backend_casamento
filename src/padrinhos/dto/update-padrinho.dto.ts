import { PartialType } from '@nestjs/mapped-types';
import { CreatePadrinhoDto } from './create-padrinho.dto';

export class UpdatePadrinhoDto extends PartialType(CreatePadrinhoDto) {}
