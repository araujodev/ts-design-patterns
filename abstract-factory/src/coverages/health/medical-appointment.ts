import { IAdditional } from "../../coverage-categories/additional.interface";

export class MedicalAppointment implements IAdditional {
    assistance(): string {
        return 'Health: Medical Appointment Assistance';
    }
}