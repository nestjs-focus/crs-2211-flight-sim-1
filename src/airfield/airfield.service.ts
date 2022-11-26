import { Injectable } from '@nestjs/common';

@Injectable()
export class AirfieldService {

  findAllAirfields() {
    return 'LWS:Lewiston, BYI:Burley';
  }

  findAirfieldByTailNumber(tailNum: string) {
    return `Airfield "${tailNum}" is hosting the followng airplanes : GC-345, HR-721`;
  }
}
