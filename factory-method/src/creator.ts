import { Transport } from "./transport.interface";

export abstract class Creator {
    public abstract deliveryFactory(): Transport;

    public deliver(): string {
        const transportType = this.deliveryFactory();
        return transportType.deliver();
    }
    
}