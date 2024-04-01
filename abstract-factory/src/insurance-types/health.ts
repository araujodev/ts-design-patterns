import { IAdditional } from "../coverage-categories/additional.interface";
import { IRefundPartial } from "../coverage-categories/refund-partial.interface";
import { IRefundTotal } from "../coverage-categories/refund-total.interface";
import { Death } from "../coverages/health/death";
import { MedicalAppointment } from "../coverages/health/medical-appointment";
import { Sickness } from "../coverages/health/sickness";
import { InsuranceAbstractFactory } from "../insurance-factory.interface";

export class Health implements InsuranceAbstractFactory {

    refundTotalCoverages(): IRefundTotal {
        return new Death();
    }
    
    refundPartialCoverages(): IRefundPartial {
        return new Sickness();
    }

    additionalCoverages(): IAdditional {
        return new MedicalAppointment();
    }
    
}