import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightSimulatorModule } from './flight-simulator/flight-simulator.module';
import { AirplaneModule } from './airplane/airplane.module';
import { AirfieldModule } from './airfield/airfield.module';

@Module({
  imports: [FlightSimulatorModule, AirplaneModule, AirfieldModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
