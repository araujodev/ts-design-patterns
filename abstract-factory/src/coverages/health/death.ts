import { IRefundTotal } from "../../coverage-categories/refund-total.interface";

export class Death implements IRefundTotal {
    assistance(): string {
        return 'Health: Death Assistance';
    }
}