import { IRefundPartial } from "../../coverage-categories/refund-partial.interface";

export class Broke implements IRefundPartial {
    assistance(): string {
        return 'Mobile: Broke Assistance';
    }
}