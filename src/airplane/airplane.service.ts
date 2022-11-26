import { Injectable } from '@nestjs/common';

@Injectable()
export class AirplaneService {
  getAirplaneById(id: string) {
    return `For airplane with tail number "${id}" the stautus is fuel=80% weight=12,500lb`;
  }

  resetAllAirplanes(allAirplanes: any) {
    return allAirplanes;
  }

  updateAirplaneById(id: string, airplaneObject: any) {
    console.log(`Updating airplane with tail number "${id}" `);
    return airplaneObject;
  }
}
