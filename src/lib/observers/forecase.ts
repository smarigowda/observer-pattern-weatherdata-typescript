import { IObserver } from "../../interfaces/observer";

export class Forecast implements IObserver {
    update(): void {
        console.log('notification received from Weather Data');
    }
}