import { Car } from './car';


// Abstract Decorator
abstract class CarOptions extends Car {
  decoratedCar: Car;
  public abstract getDescription(): string;
  public abstract cost(): number;
}
// Decorator 1
export class EnhancedAutoPilot extends CarOptions {
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
export class Wifi extends CarOptions {
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
