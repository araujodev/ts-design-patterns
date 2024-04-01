import { IAdditional } from "../coverage-categories/additional.interface";
import { IRefundPartial } from "../coverage-categories/refund-partial.interface";
import { IRefundTotal } from "../coverage-categories/refund-total.interface";
import { Franchise } from "../coverages/auto/franchise";
import { TotalLoss } from "../coverages/auto/total-loss";
import { Winch } from "../coverages/auto/winch";
import { InsuranceAbstractFactory } from "../insurance-factory.interface";

export class Auto implements InsuranceAbstractFactory {

    refundTotalCoverages(): IRefundTotal {
        return new TotalLoss();
    }
    
    refundPartialCoverages(): IRefundPartial {
        return new Franchise();
    }

    additionalCoverages(): IAdditional {
        return new Winch();
    }
    
}