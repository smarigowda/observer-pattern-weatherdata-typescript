import { Container } from "inversify";
import { IObservable } from "./interfaces/observable";
import { IObserver } from "./interfaces/observer";

import { container } from "./inversify.config";
import { TYPES } from "./types";

console.log("hello...welcome to TS");

const weatherData = container.get<IObservable>(TYPES.WeatherData);

const stats = container.get<IObserver>(TYPES.Statistics);
const forecast = container.get<IObserver>(TYPES.Forecast);
const currentConditions = container.get<IObserver>(TYPES.CurrentConditions);

// Displays getting themselves registered to get notifications
weatherData.register(stats);
weatherData.register(forecast);
weatherData.register(currentConditions);

// this will be called by the library in real project
weatherData.notifyObservers();

console.log("[index.ts] Stats not interested in the update");
weatherData.remove(stats);

// this will be called by the library in real project
weatherData.notifyObservers();

weatherData.remove(currentConditions);
weatherData.remove(forecast);
