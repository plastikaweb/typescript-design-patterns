"use strict";
exports.__esModule = true;
var TemperatureDisplay1 = /** @class */ (function () {
    function TemperatureDisplay1(weatherStation) {
        this.weatherStation = weatherStation;
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    TemperatureDisplay1.prototype.update = function (temperature) {
        console.log(temperature + " updated the temperature station 1!");
    };
    return TemperatureDisplay1;
}());
exports.TemperatureDisplay1 = TemperatureDisplay1;
var Fan = /** @class */ (function () {
    function Fan(weatherStation) {
        this.weatherStation = weatherStation;
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Fan.prototype.update = function (temperature) {
        if (temperature > 35) {
            console.log(temperature + " is getting hot! Fan is on");
        }
        else {
            console.log(temperature + " is cool! Fan is out");
        }
    };
    return Fan;
}());
exports.Fan = Fan;
