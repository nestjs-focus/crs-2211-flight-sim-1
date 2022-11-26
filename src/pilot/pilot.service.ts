import { Injectable } from '@nestjs/common';

@Injectable()
export class PilotService {
  getLogsByDateAndPilot(date: string , pilotName: string) {
    return(`Returning logs for date = "${date}" and pilot = "${pilotName}"`);
  }

  createNewPilotProfile(newPilot: any) {
    return(newPilot);
  }
  
  removePilot() {
    return('Deleted the pilot logs');
  }
}
