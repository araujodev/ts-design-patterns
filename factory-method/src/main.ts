import { RoadDelivery } from "./road.creator";
import { SeaDelivery } from "./sea.creator";

const bootstrap = () => {
    const deliveryByRoad = new RoadDelivery();
    const road = deliveryByRoad.deliver();
    console.log(road);


    const deliveryBySea = new SeaDelivery();
    const sea = deliveryBySea.deliver();
    console.log(sea)
}

bootstrap();