import { Creator } from "./creator";
import { Truck } from "./truck";
import { Transport } from "./transport.interface";

export class RoadDelivery extends Creator {
    public deliveryFactory(): Transport {
        return new Truck();
    }
}