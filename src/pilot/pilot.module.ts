import { Module } from '@nestjs/common';
import { LicenseService } from './license.service';
import { PilotController } from './pilot.controller';
import { PilotService } from './pilot.service';

@Module({
  controllers: [PilotController],
  providers: [PilotService, LicenseService]
})
export class PilotModule {}
