import { IObserver } from "../../interfaces/observer";

export class CurrentConditions implements IObserver {
  update(): void {
    console.log("received update from Weather Data");
  }
}
