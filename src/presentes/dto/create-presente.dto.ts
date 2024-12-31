import { IsNumber, IsString } from "class-validator";

// Classe DTO para criação de presente com validação de tipos
// DTO Data Transfer Object - Objeto de Transferência de Dados
// Serve para definir a estrutura de dados que será transferida entre a aplicação e o banco de dados

export class CreatePresenteDto {

    @IsString()
    name: string;

    @IsNumber()
    price: number;
    
    @IsNumber()
    quantity: number;

    @IsString()
    description: string;
    
    @IsString()
    image: string;
}
