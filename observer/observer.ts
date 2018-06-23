import { Subject, Observer } from './models';
import { WeatherStation } from './subject';

export class TemperatureDisplay1 implements Observer {
  private subject: Subject;

  constructor(private weatherStation: WeatherStation) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(temperature: number) {
    console.log(`${temperature} updated the temperature station 1!`);
  }

}
export class Fan implements Observer {
  private subject: Subject;

  constructor(private weatherStation: WeatherStation) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(temperature: number) {
    if (temperature > 35) {
      console.log(`${temperature} is getting hot! Fan is on`);
    } else {
      console.log(`${temperature} is cool! Fan is out`);
    }
  }

}
