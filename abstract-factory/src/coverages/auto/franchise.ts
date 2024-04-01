import { IRefundPartial } from "../../coverage-categories/refund-partial.interface";

export class Franchise implements IRefundPartial {
    assistance(): string {
        return 'Auto: Franchise Assistance';
    }
}