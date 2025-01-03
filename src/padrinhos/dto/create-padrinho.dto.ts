import { IsString } from "class-validator";

export class CreatePadrinhoDto {
    
        @IsString()
        nome: string;
    
        @IsString()
        descricao: string;
}
