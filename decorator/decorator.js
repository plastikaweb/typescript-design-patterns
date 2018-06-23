"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var car_1 = require("./car");
// Abstract Decorator
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(car_1.Car));
// Decorator 1
var EnhancedAutoPilot = /** @class */ (function (_super) {
    __extends(EnhancedAutoPilot, _super);
    function EnhancedAutoPilot(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    EnhancedAutoPilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ", Enhanced AutoPilot";
    };
    EnhancedAutoPilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 3000;
    };
    return EnhancedAutoPilot;
}(CarOptions));
exports.EnhancedAutoPilot = EnhancedAutoPilot;
// Decorator 2
var Wifi = /** @class */ (function (_super) {
    __extends(Wifi, _super);
    function Wifi(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    Wifi.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ", WIFI";
    };
    Wifi.prototype.cost = function () {
        return this.decoratedCar.cost() + 550;
    };
    return Wifi;
}(CarOptions));
exports.Wifi = Wifi;
