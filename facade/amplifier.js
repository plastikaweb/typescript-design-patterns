"use strict";
exports.__esModule = true;
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.on = function () {
        console.log('Amp is turning on...');
    };
    Amplifier.prototype.off = function () {
        console.log('Amp is turning off...');
    };
    Amplifier.prototype.setSource = function (source) {
        console.log("setting source to " + source);
    };
    Amplifier.prototype.setVolume = function (volume) {
        console.log("setting the volume to " + volume);
    };
    return Amplifier;
}());
exports.Amplifier = Amplifier;
