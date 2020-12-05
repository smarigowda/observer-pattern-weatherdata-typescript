import { injectable } from "inversify";
import { IObserver } from "../../interfaces/observer";

@injectable()
export class Statistics implements IObserver {
  update(temperature: string, pressure: string, humidity: string): void {
    console.log(`[Statistics] received notification from Weather Data: ${temperature}, ${pressure} and ${humidity}`);
  }
}
