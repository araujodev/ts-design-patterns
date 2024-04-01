import { IAdditional } from "../coverage-categories/additional.interface";
import { IRefundPartial } from "../coverage-categories/refund-partial.interface";
import { IRefundTotal } from "../coverage-categories/refund-total.interface";
import { Broke } from "../coverages/mobile/broke";
import { Theft } from "../coverages/mobile/theft";
import { Antivirus } from "../coverages/mobile/theft copy";
import { InsuranceAbstractFactory } from "../insurance-factory.interface";

export class Mobile implements InsuranceAbstractFactory {

    refundTotalCoverages(): IRefundTotal {
        return new Theft();
    }
    
    refundPartialCoverages(): IRefundPartial {
        return new Broke();
    }

    additionalCoverages(): IAdditional {
        return new Antivirus();
    }
    
}