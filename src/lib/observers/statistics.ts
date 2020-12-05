import { injectable } from "inversify";
import { IObserver } from "../../interfaces/observer";

@injectable()
export class Statistics implements IObserver {
  update(): void {
    console.log("[Statistics] received notification from Weather Data");
  }
}
