import { PartialType } from '@nestjs/mapped-types';
import { CreatePresenteDto } from './create-presente.dto';

// Classe DTO para atualização de presente com validação de tipos
// Utiliza o PartialType para definir que os campos são opcionais, mas mantém a validação de tipos conforme o CreatePresenteDto

export class UpdatePresenteDto extends PartialType(CreatePresenteDto) {}
