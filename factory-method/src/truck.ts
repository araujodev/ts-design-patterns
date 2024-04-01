import { Transport } from "./transport.interface";

export class Truck implements Transport {
    deliver(): string {
        return 'Deliver by road using transport: ' + this.constructor.name;
    }
}