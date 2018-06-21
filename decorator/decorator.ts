// Abstract Class
abstract class Car {
  public description: string;

  public getDescription() {
    return this.description;
  }

  public abstract cost(): number;
}

// Car One
class CarOne extends Car {
  public description = 'Car One';

  cost() {
    return 12000;
  }
}
// Car Two
class CarTwo extends Car {
  public description = 'Car Two';

  cost() {
    return 21000;
  }
}

// Abstract Decorator
abstract class CarOptions extends Car {
  decoratedCar: Car;
  public abstract getDescription(): string;
  public abstract cost(): number;
}
// Decorator 1
class EnhancedAutoPilot extends CarOptions {
  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return `${this.decoratedCar.getDescription()}, Enhanced AutoPilot`;
  }

  public cost(): number {
    return this.decoratedCar.cost() + 3000;
  }
}
// Decorator 2
class Wifi extends CarOptions {
  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return `${this.decoratedCar.getDescription()}, WIFI`;
  }

  public cost(): number {
    return this.decoratedCar.cost() + 550;
  }
}



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
