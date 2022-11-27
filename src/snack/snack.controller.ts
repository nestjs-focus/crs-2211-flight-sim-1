import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AddSnackDto } from './dtos/add-snack.dto';
import { UpdateSnackDto } from './dtos/update-snack.dto';
import { SnackService } from './snack.service';

@Controller('snack')
export class SnackController {
    constructor(private readonly snackService: SnackService){}
    
    @Get()
    getAllSnacks(){
        return this.snackService.getAllSnacks();
    }

    @Post('/:id')
    addSnack(@Body() body: AddSnackDto, @Param('id') idSnack:string){
        const {type, price} = body;
        console.log(body);
        return this.snackService.addSnackToMachine(type, price, parseInt(idSnack));
    }

    @Patch('/:id')
    updateSnackInfo(@Body() body: UpdateSnackDto, @Param('id') idSnack:string){
        const {isInMachine, price} = body;
        console.log(body);

        return this.snackService.updateSnackStatus(isInMachine, price, parseInt(idSnack));
    }
}
