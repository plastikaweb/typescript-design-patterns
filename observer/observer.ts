interface Subject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}

interface Observer {
  update(temperature: number);
}

// main subject
class WeatherStation implements Subject {
  private temperature: number;
  private observers: Observer[] = [];

  registerObserver(o: Observer) {
    this.observers.push(o);
  }
  removeObserver(o: Observer) {
    this.observers = this.observers.filter(ob => ob !== o);
  }
  notifyObservers() {
    this.observers.forEach(o => {
      o.update(this.temperature);
    });
  }

  setTemperature(temperature: number) {
    this.temperature = temperature;
    this.notifyObservers();
  }
}

// observers
class TemperatureDisplay1 implements Observer {
  private subject: Subject;

  constructor(private weatherStation: WeatherStation) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(temperature: number) {
    console.log(`${temperature} updated the temperature station 1!`);
  }

}
class Fan implements Observer {
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

// instances - observable / subject
const weatherStattion = new WeatherStation();
// instances - observers
const display = new TemperatureDisplay1(weatherStattion);
const fan = new Fan(weatherStattion);

weatherStattion.setTemperature(20);
weatherStattion.setTemperature(40);
