import { injectable } from "inversify";
import { IObservable } from "../../interfaces/observable";
import { IObserver } from "../../interfaces/observer";

@injectable()
export class WeatherData implements IObservable {
  private list = [];

  private getTemperature(): string {
    // gets the temperature from sensors
    return "20C";
  }

  private getHumidity(): string {
    // gets the humidity from sensors
    return "84%";
  }

  private getPressure(): string {
    // gets the pressure from sensors
    return "1046hPa";
  }

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
    const temperature = this.getTemperature();
    const pressure = this.getPressure();
    const humidity = this.getHumidity();

    this.list.forEach((obs) => {
      obs.update(temperature, pressure, humidity);
    });
  }
}
