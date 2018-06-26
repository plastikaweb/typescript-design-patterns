"use strict";
exports.__esModule = true;
var IPhone7 = /** @class */ (function () {
    function IPhone7() {
    }
    IPhone7.prototype.useLightning = function () {
        console.log('Using lightning port...');
    };
    return IPhone7;
}());
exports.IPhone7 = IPhone7;
var GooglePixel = /** @class */ (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useMicroUSB = function () {
        console.log('Using micro USB port...');
    };
    return GooglePixel;
}());
var LightningToMicroUSBAdapter = /** @class */ (function () {
    function LightningToMicroUSBAdapter(iphone) {
        this.iphone = iphone;
    }
    LightningToMicroUSBAdapter.prototype.useMicroUSB = function () {
        console.log('I want to use micro USB, converting to lightning...');
        this.iphone.useLightning();
    };
    return LightningToMicroUSBAdapter;
}());
exports.LightningToMicroUSBAdapter = LightningToMicroUSBAdapter;
