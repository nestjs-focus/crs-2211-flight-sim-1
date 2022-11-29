import { IsBoolean, IsNumber } from "class-validator";

export class UpdateSnackDto {
    @IsBoolean()
    isInMachine: boolean;

    @IsNumber()
    price: number;
}
