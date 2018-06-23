import { BlueRay } from './blue-ray';
import { Tv } from './tv';
import { Lights } from './lights';
import { PopCorner } from './pop-corner';
import { Amplifier } from './amplifier';

export class HomeTheaterFacade {

  constructor(
    private amplifier: Amplifier,
    private blueRay: BlueRay,
    private tv: Tv,
    private lights: Lights,
    private popCorner: PopCorner) { }

    watchMovie() {
      this.popCorner.turOn();
      this.popCorner.pop();
      this.lights.dim();
      this.tv.turOn();
      this.amplifier.on();
      this.amplifier.setSource('blue ray');
      this.amplifier.setVolume(7);
      this.blueRay.turOn();
      this.blueRay.play();
    }

    endMovie() {
      this.popCorner.turOff();
      this.amplifier.off();
      this.tv.turOff();
      this.blueRay.turOff();
    }
}