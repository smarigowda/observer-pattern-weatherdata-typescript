import { injectable } from "inversify";
import { IObservable } from "../../interfaces/observable";
import { IObserver } from "../../interfaces/observer";

@injectable()
export class WeatherData implements IObservable {
  private list = [];

  public register(o: IObserver): void {
    console.log("[WeatherData] Registering an observer...");
    this.list.push(o);
  }

  public remove(observer: IObserver): void {
    const indexOfObserverToBeRemoved = this.list.indexOf(observer);
    this.list = this.list.filter((obs, index) => {
      return indexOfObserverToBeRemoved !== index;
    });
  }

  public notifyObservers(): void {
    console.log(
      "[WeatherData] New weather data received...notifying observers now."
    );
    this.list.forEach((obs) => {
      obs.update();
    });
  }
}
