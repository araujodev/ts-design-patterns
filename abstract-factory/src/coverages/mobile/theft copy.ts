import { IAdditional } from "../../coverage-categories/additional.interface";

export class Antivirus implements IAdditional {
    assistance(): string {
        return 'Mobile: Antivirus Assistance';
    }
}