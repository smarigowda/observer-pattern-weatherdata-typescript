import { IObserver } from "../../interfaces/observer";

export class Statistics implements IObserver {
    update(): void {
        console.log('received notification from Weather Data');
    }
}