import { IObserver } from "./observer";

export interface IObservable {
  register(o: IObserver): void;
  remove(o: IObserver): void;
  notifyObservers(): void;
  getTemperature(): string;
  getPressure(): string;
  getHumidity(): string;
  getWindSpeed(): string;
}
