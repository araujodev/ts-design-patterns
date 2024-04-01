import { IRefundPartial } from "../../coverage-categories/refund-partial.interface";

export class Sickness implements IRefundPartial {
    assistance(): string {
        return 'Health: Sickness Assistance';
    }
}