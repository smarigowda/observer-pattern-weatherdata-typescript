import { inject, injectable } from "inversify";
import { IObservable } from "../../interfaces/observable";
import { IObserver } from "../../interfaces/observer";
import { TYPES } from "../../types";

@injectable()
export class Forecast implements IObserver {
  constructor(@inject(TYPES.WeatherData) weatherData: IObservable) {
    weatherData.register(this);
  }
  update(temperature: string, pressure: string, humidity: string): void {
    console.log(
      `[Forecast] notification received from Weather Data: ${temperature}, ${pressure} and ${humidity}`
    );
  }
}
