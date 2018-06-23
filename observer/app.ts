import { WeatherStation } from './subject';
import { TemperatureDisplay1, Fan } from './observer';

// instances - observable / subject
const weatherStattion = new WeatherStation();
// instances - observers
const display = new TemperatureDisplay1(weatherStattion);
const fan = new Fan(weatherStattion);

weatherStattion.setTemperature(20);
weatherStattion.setTemperature(40);
