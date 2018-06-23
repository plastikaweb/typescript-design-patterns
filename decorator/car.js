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
// Abstract Class
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
exports.Car = Car;
// Car One
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
exports.CarOne = CarOne;
// Car Two
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
exports.CarTwo = CarTwo;
