import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { PilotService } from './pilot.service';
import { LicenseService } from './license.service';

@Controller('pilot')
export class PilotController {
  constructor(
    private readonly pilotService: PilotService,
    private readonly licenseService: LicenseService,
  ) {}

  @Get('license')
  getLicenseDocument() {
    return this.licenseService.getNewestLicenseDocument();
  }

  @Get()
  getPilotLogs(@Query() logQuery: any) {
    const { date, pilot } = logQuery;
    return this.pilotService.getLogsByDateAndPilot(date, pilot);
  }

  @Post()
  addPilotLog(@Body() bodyOfRequest: any) {
    return this.pilotService.createNewPilotProfile(bodyOfRequest);
  }

  @Delete()
  deletePilotLogs() {
    return this.pilotService.removePilot();
  }


}
