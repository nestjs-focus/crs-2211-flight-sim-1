import { Body, Controller, Get, Param, Patch, Put } from '@nestjs/common';
import { AirplaneService } from './airplane.service';

@Controller('airplane')
export class AirplaneController {

constructor(private readonly airplaneService: AirplaneService){}


    @Get('/status/:tailnumber')
    getAirplaneStatus(@Param('tailnumber') tailnumber: string){
        return  this.airplaneService.getAirplaneById(tailnumber);
    }

    @Put()
    resetToDefault(@Body() body: any){
        return this.airplaneService.resetAllAirplanes(body);
    }

    @Patch('/:id')
    updateAirplane( @Param('id') id: string , @Body('fuel') requestBody: any){
        return this.airplaneService.updateAirplaneById(id, requestBody);
    }
}
