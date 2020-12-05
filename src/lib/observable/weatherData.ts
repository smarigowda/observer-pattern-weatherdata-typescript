import { IObservable } from "../../interfaces/observable";
import { IObserver } from "../../interfaces/observer";

export class WeatherData implements IObservable {
  private list: [IObserver];

  public register(o: IObserver): void {
    this.list.push(o);
  }

  public remove(o: IObserver): void {
    const index = this.list.indexOf(o);
    console.log(index);
  }

  notifyObservers(): void {
    console.log("notifying observers...");
  }
}
