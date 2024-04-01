import { IAdditional } from "./coverage-categories/additional.interface";
import { IRefundPartial } from "./coverage-categories/refund-partial.interface";
import { IRefundTotal } from "./coverage-categories/refund-total.interface";

export interface InsuranceAbstractFactory {
    refundTotalCoverages(): IRefundTotal;
    refundPartialCoverages(): IRefundPartial;
    additionalCoverages(): IAdditional;
}