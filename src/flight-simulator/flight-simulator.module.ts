import { Module } from '@nestjs/common';
import { AirfieldModule } from '../airfield/airfield.module';
import { AirplaneModule } from '../airplane/airplane.module';
import { FlightSimulatorController } from './flight-simulator.controller';

@Module({
    imports: [AirplaneModule, AirfieldModule,],
    controllers: [FlightSimulatorController],

})
export class FlightSimulatorModule {
    
}
