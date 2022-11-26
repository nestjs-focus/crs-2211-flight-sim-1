import { Controller, Get } from '@nestjs/common';

@Controller('fs')
export class FlightSimulatorController {

    @Get()
    displayHomepage(){
        console.log('Hello from home page');
        return('Hello from home page');
    }
}


