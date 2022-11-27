import { Injectable } from '@nestjs/common';

@Injectable()
export class SnackService {
    getAllSnacks(){
        return ('List of all snacks');
      }
    
      addSnackToMachine(){
        return ('A snack was added to the machine');
      }
    
      updateSnackStatus(){
        return ('Updated the snack');
      }
}
