// Abstract Class
export abstract class Car {
  public description: string;

  public getDescription() {
    return this.description;
  }

  public abstract cost(): number;
}

// Car One
export class CarOne extends Car {
  public description = 'Car One';

  cost() {
    return 12000;
  }
}
// Car Two
export class CarTwo extends Car {
  public description = 'Car Two';

  cost() {
    return 21000;
  }
}
