import { IsEnum, IsNumber } from "class-validator";
import { SnackType } from "../entities/snack.entity";

export class AddSnackDto {
    @IsEnum(SnackType)
    type: SnackType;

    @IsNumber()
    price: number;
}
