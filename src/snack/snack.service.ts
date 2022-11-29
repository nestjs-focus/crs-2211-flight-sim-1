import { Injectable } from '@nestjs/common';
import { UpdateSnackDto } from './dtos/update-snack.dto';
import { SnackType } from './entities/snack.entity';

@Injectable()
export class SnackService {
  getAllSnacks() {
    return 'List of all snacks';
  }

  addSnackToMachine(snackType: SnackType, price: number, id: number) {
    return `A ${snackType} snack with id='${id}' at price $${price} was added to the machine.`;
  }

  updateSnackStatus(updateSnackDto: UpdateSnackDto, id:number) {
    const {isInMachine, price} = updateSnackDto;

    console.log(`A snack with id='${id}' was updated with price $${price} and was ${
      isInMachine ? 'added to' : 'removed from' } machine.`);
      return updateSnackDto;
  }
}
