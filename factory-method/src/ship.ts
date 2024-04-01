import { Transport } from "./transport.interface";

export class Ship implements Transport {
    deliver(): string {
        return 'Deliver by sea using transport: ' + this.constructor.name;
    }
}