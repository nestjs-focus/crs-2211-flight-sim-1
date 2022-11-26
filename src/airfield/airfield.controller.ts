import { Controller, Get, Param } from '@nestjs/common';
import { AirfieldService } from './airfield.service';

@Controller('airfield')
export class AirfieldController {
  constructor(private readonly airfieldService: AirfieldService) {}

  @Get()
  getAllAirfields() {
    return this.airfieldService.findAllAirfields();
  }

  @Get('/:id')
  getAirfieldTailNumbers(@Param('id') airfieldId: string) {
    return this.airfieldService.findAirfieldByTailNumber(airfieldId);
  }
}
