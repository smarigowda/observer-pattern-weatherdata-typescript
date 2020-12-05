import "reflect-metadata";

import { Container } from "inversify";
import { IObservable } from "./interfaces/observable";
import { IObserver } from "./interfaces/observer";
import { WeatherData } from "./lib/observable/weatherData";
import { CurrentConditions } from "./lib/observers/currentConditions";
import { Forecast } from "./lib/observers/forecast";
import { Statistics } from "./lib/observers/statistics";

import { TYPES } from "./types";

const container = new Container();

container.bind<IObservable>(TYPES.WeatherData).to(WeatherData);

container.bind<IObserver>(TYPES.Statistics).to(Statistics);
container.bind<IObserver>(TYPES.Forecast).to(Forecast);
container.bind<IObserver>(TYPES.CurrentConditions).to(CurrentConditions);

export { container };
