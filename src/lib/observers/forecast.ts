import { injectable } from "inversify";
import { IObserver } from "../../interfaces/observer";

@injectable()
export class Forecast implements IObserver {
    update(temperature: string, pressure: string, humidity: string): void {
        console.log(`[Forecast] notification received from Weather Data: ${temperature}, ${pressure} and ${humidity}`);
    }
}