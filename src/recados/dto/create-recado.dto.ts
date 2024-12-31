import { IsDate, IsString } from "class-validator";

export class CreateRecadoDto {
    @IsString()
    name: string;

    @IsString()
    message: string;

    @IsDate()
    createdAt: Date;
}
