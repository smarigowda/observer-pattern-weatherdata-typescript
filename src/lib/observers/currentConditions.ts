import { injectable } from "inversify";
import { IObserver } from "../../interfaces/observer";

@injectable()
export class CurrentConditions implements IObserver {
  update(): void {
    console.log("[CurrentConditions] received update from Weather Data");
  }
}
