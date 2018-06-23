"use strict";
exports.__esModule = true;
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.removeObserver = function (o) {
        this.observers = this.observers.filter(function (ob) { return ob !== o; });
    };
    WeatherStation.prototype.notifyObservers = function () {
        var _this = this;
        this.observers.forEach(function (o) {
            o.update(_this.temperature);
        });
    };
    WeatherStation.prototype.setTemperature = function (temperature) {
        this.temperature = temperature;
        this.notifyObservers();
    };
    return WeatherStation;
}());
exports.WeatherStation = WeatherStation;
