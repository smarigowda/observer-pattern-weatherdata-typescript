import { injectable } from "inversify";
import { IObserver } from "../../interfaces/observer";

@injectable()
export class Forecast implements IObserver {
    update(): void {
        console.log('[Forecast] notification received from Weather Data');
    }
}