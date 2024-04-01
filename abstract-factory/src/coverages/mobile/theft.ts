import { IRefundTotal } from "../../coverage-categories/refund-total.interface";

export class Theft implements IRefundTotal {
    assistance(): string {
        return 'Mobile: Theft Assistance';
    }
}