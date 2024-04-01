import { Health } from "./insurance-types/health";
import { Mobile } from "./insurance-types/mobile";

const bootstrap = () => {
    const healthPlan = new Health();
    console.log(healthPlan.refundTotalCoverages().assistance());
    console.log(healthPlan.refundPartialCoverages().assistance());
    console.log(healthPlan.additionalCoverages().assistance());

    const mobilePlan = new Mobile();
    console.log(mobilePlan.refundTotalCoverages().assistance());
    console.log(mobilePlan.refundPartialCoverages().assistance());
    console.log(mobilePlan.additionalCoverages().assistance());

    const autoPlan = new Mobile();
    console.log(autoPlan.refundTotalCoverages().assistance());
    console.log(autoPlan.refundPartialCoverages().assistance());
    console.log(autoPlan.additionalCoverages().assistance());
}

bootstrap();