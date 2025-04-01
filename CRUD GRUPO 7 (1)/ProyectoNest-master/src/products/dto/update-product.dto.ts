
import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateProductDto {
     @IsUUID()
        @IsOptional()
        readonly id?: string;
    }

