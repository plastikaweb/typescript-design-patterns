"use strict";
exports.__esModule = true;
var car_1 = require("./car");
var decorator_1 = require("./decorator");
// instance
var myFerrari = new car_1.CarOne();
// add decorator 1
myFerrari = new decorator_1.Wifi(myFerrari);
console.log(myFerrari.cost()); // 12550
console.log(myFerrari.getDescription()); // Car One, WIFI
// add decorator 2
myFerrari = new decorator_1.EnhancedAutoPilot(myFerrari);
console.log(myFerrari.cost()); // 15550
console.log(myFerrari.getDescription()); // Car One, WIFI, Enhanced AutoPilot
