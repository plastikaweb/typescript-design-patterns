import { BlueRay } from './blue-ray';
import { Tv } from './tv';
import { Amplifier } from './amplifier';
import { PopCorner } from './pop-corner';
import { Lights } from './lights';
import { HomeTheaterFacade } from './facade';

const blueray = new BlueRay();
const tv = new Tv();
const amplifier = new Amplifier();
const popCorner = new PopCorner();
const lights = new Lights();

const homeTheater = new HomeTheaterFacade(amplifier, blueray, tv, lights, popCorner);

homeTheater.watchMovie();
homeTheater.endMovie();
