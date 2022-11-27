import { Injectable } from '@nestjs/common';
import { SnackType } from './entities/snack.entity';

@Injectable()
export class SnackService {
    getAllSnacks(){
        return ('List of all snacks');
      }
    
      addSnackToMachine(snackType: SnackType, price: number , id: number){
        return (`A ${snackType} snack with id='${id}' at price $${price} was added to the machine.`);
      }
    
      updateSnackStatus(isInMachine:boolean, price: number, id: number){
        return (`A snack with id='${id}' with price $${price} was ${isInMachine?"added to":"removed from"} machine.`);
      }
}
