import { IsCurrency, IsNumber, IsString, MinLength } from "class-validator";

// Classe DTO para criação de presente com validação de tipos
// DTO Data Transfer Object - Objeto de Transferência de Dados
// Serve para definir a estrutura de dados que será transferida entre a aplicação e o banco de dados

export class CreatePresenteDto {

    @IsString({ message: 'O nome deve ser uma string' })
    @MinLength(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
    name: string;

    @IsCurrency({ symbol: 'R$', decimal_separator:',' }, { message: 'O preço deve ser um valor monetário válido' })
    price: number;

    @IsString({ message: 'A descrição deve ser uma string' })
    description: string;
}
