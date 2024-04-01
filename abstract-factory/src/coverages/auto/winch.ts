import { IAdditional } from "../../coverage-categories/additional.interface";

export class Winch implements IAdditional {
    assistance(): string {
        return 'Auto: Winch Assistance';
    }
}