import { SnackType } from "../entities/snack.entity";

export class AddSnackDto {
    type: SnackType;
    price: number;
}
