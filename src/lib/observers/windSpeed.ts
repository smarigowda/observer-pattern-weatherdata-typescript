import { inject, injectable } from "inversify";
import { IObservable } from "../../interfaces/observable";
import { IObserver } from "../../interfaces/observer";
import { TYPES } from "../../types";

@injectable()
export class WindSpeed implements IObserver {
  wd: IObservable;
  constructor(@inject(TYPES.WeatherData) weatherData: IObservable) {
    this.wd = weatherData;
    weatherData.register(this);
  }
  update(): void {
    console.log(
      `[WindSpeed] received update from Weather Data: ${this.wd.getWindSpeed()}`
    );
  }
}
