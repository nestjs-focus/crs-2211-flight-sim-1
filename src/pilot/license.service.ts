import { Injectable } from "@nestjs/common";

@Injectable()
export class LicenseService{

    getNewestLicenseDocument(){
        return('Here is the newest license document.');
    }
}