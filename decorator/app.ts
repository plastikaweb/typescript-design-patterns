import { CarOne } from './car';
import { Wifi, EnhancedAutoPilot } from './decorator';

// instance
let myFerrari = new CarOne();
// add decorator 1
myFerrari = new Wifi(myFerrari);
console.log(myFerrari.cost()); // 12550
console.log(myFerrari.getDescription()); // Car One, WIFI

// add decorator 2
myFerrari = new EnhancedAutoPilot(myFerrari);
console.log(myFerrari.cost()); // 15550
console.log(myFerrari.getDescription()); // Car One, WIFI, Enhanced AutoPilot
