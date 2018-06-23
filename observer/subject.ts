import { Subject, Observer } from './models';

export class WeatherStation implements Subject {
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
