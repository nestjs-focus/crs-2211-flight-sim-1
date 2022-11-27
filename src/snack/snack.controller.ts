import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AddSnackDto } from './dtos/add-snack.dto';
import { UpdateSnackDto } from './dtos/update-snack.dto';

@Controller('snack')
export class SnackController {

    @Get()
    getAllSnacks(){

    }

    @Post('/:id')
    addSnack(@Body() Body: AddSnackDto, @Param('id') id:string){

    }

    @Patch()
    updateSnackInfo(@Body() Body: UpdateSnackDto, @Param('id') id:string){
        
    }
}
