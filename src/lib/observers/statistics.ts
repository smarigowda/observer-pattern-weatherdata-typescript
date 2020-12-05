import { inject, injectable } from "inversify";
import { IObservable } from "../../interfaces/observable";
import { IObserver } from "../../interfaces/observer";
import { TYPES } from "../../types";

@injectable()
export class Statistics implements IObserver {
  wd: IObservable;
  constructor(@inject(TYPES.WeatherData) weatherData: IObservable) {
    weatherData.register(this);
    this.wd = weatherData;
  }
  update(): void {
    console.log(
      `[Statistics] received update from Weather Data: ${this.wd.getTemperature()}, ${this.wd.getPressure()} and ${this.wd.getHumidity()}`
    );
  }
}