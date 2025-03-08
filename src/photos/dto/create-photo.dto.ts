import { IsNumber, IsString } from "class-validator";

export class CreatePhotoDto {
    @IsNumber()
    id: number;

    @IsString()
    base64: string;
}
