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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var CarOne = /** @class */ (function (_super) {
    __extends(CarOne, _super);
    function CarOne() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Car One';
        return _this;
    }
    CarOne.prototype.cost = function () {
        return 12000;
    };
    return CarOne;
}(Car));
var CarTwo = /** @class */ (function (_super) {
    __extends(CarTwo, _super);
    function CarTwo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Car Two';
        return _this;
    }
    CarTwo.prototype.cost = function () {
        return 21000;
    };
    return CarTwo;
}(Car));
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
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
var myFerrari = new CarOne();
myFerrari = new Wifi(myFerrari);
console.log(myFerrari.cost());
console.log(myFerrari.getDescription());
myFerrari = new EnhancedAutoPilot(myFerrari);
console.log(myFerrari.cost());
console.log(myFerrari.getDescription());
