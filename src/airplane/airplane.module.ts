import { Module } from '@nestjs/common';
import { PilotModule } from '../pilot/pilot.module';
import { AirplaneController } from './airplane.controller';
import { AirplaneService } from './airplane.service';

@Module({
    imports: [PilotModule],
    controllers: [AirplaneController],
    providers: [AirplaneService],
})
export class AirplaneModule {}
