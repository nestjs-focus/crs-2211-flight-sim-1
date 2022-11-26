import { Module } from '@nestjs/common';
import { PilotController } from './pilot.controller';
import { PilotService } from './pilot.service';
import { Service2Service } from './service2/service2.service';

@Module({
  controllers: [PilotController],
  providers: [PilotService, Service2Service]
})
export class PilotModule {}
