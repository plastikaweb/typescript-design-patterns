"use strict";
exports.__esModule = true;
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade(amplifier, blueRay, tv, lights, popCorner) {
        this.amplifier = amplifier;
        this.blueRay = blueRay;
        this.tv = tv;
        this.lights = lights;
        this.popCorner = popCorner;
    }
    HomeTheaterFacade.prototype.watchMovie = function () {
        this.popCorner.turOn();
        this.popCorner.pop();
        this.lights.dim();
        this.tv.turOn();
        this.amplifier.on();
        this.amplifier.setSource('blue ray');
        this.amplifier.setVolume(7);
        this.blueRay.turOn();
        this.blueRay.play();
    };
    HomeTheaterFacade.prototype.endMovie = function () {
        this.popCorner.turOff();
        this.amplifier.off();
        this.tv.turOff();
        this.blueRay.turOff();
    };
    return HomeTheaterFacade;
}());
exports.HomeTheaterFacade = HomeTheaterFacade;
