import { Creator } from "./creator";
import { Ship } from "./ship";
import { Transport } from "./transport.interface";

export class SeaDelivery extends Creator {
    public deliveryFactory(): Transport {
        return new Ship();
    }
}