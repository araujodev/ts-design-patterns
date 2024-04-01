import { IRefundTotal } from "../../coverage-categories/refund-total.interface";

export class TotalLoss implements IRefundTotal {
    assistance(): string {
        return 'Auto: Total Loss Assistance';
    }
}