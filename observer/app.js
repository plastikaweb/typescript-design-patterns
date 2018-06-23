"use strict";
exports.__esModule = true;
var subject_1 = require("./subject");
var observer_1 = require("./observer");
// instances - observable / subject
var weatherStattion = new subject_1.WeatherStation();
// instances - observers
var display = new observer_1.TemperatureDisplay1(weatherStattion);
var fan = new observer_1.Fan(weatherStattion);
weatherStattion.setTemperature(20);
weatherStattion.setTemperature(40);
