import { injectable } from "inversify";
import { IObserver } from "../../interfaces/observer";

@injectable()
export class CurrentConditions implements IObserver {
  update(temperature: string, pressure: string, humidity: string): void {
    console.log(`[CurrentConditions] received update from Weather Data: ${temperature}, ${pressure} and ${humidity}`);
  }
}
