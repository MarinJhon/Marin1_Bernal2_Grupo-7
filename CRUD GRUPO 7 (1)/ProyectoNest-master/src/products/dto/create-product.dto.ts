import { IsString, IsNumber, IsBoolean, Min, MinLength, IsArray } from 'class-validator';

export class CreateProductDto {

    @IsString()
    @MinLength(2)
    readonly nombre: string;
    @IsString()
    readonly id: string;

    @IsString()
    readonly marca: string;

    @IsString()
    readonly precio: string;

    @IsString()
    readonly disponible: string;

    @IsString()
    readonly modelo: string;

    @IsString()
    readonly procesador: string;

    @IsString()
    readonly almacenamiento: string;

    
}
