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
var weatherStattion = new WeatherStation();
var display = new TemperatureDisplay1(weatherStattion);
var fan = new Fan(weatherStattion);
weatherStattion.setTemperature(20);
weatherStattion.setTemperature(40);
