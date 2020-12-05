export interface IObserver {
  update(temperature: string, pressure: string, humidity: string);
}
