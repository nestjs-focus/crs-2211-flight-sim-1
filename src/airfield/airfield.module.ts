import { Module } from '@nestjs/common';
import { PilotModule } from '../pilot/pilot.module';
//* import { LiveTrafficModule} from '@fiction/traffic';
import { AirfieldController } from './airfield.controller';
import { AirfieldService } from './airfield.service';

@Module({
  imports: [PilotModule /* LiveTrafficModule */],
  controllers: [AirfieldController],
  providers: [AirfieldService],
})
export class AirfieldModule {}
