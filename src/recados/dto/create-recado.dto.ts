import { IsString } from "class-validator";

export class CreateRecadoDto {
    @IsString()
    name: string;

    @IsString()
    description: string;
}
