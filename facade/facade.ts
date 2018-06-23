class Lights {
  dim() {
    console.log('Lights are dimming...');
  }
}

class Tv {
  turOn() {
    console.log('TV turning on...');
  }
  turOff() {
    console.log('TV turning off...');
  }
}

class PopCorner {
  turOn() {
    console.log('Pop corner turning on...');
  }
  turOff() {
    console.log('Pop corner turning off...');
  }
  pop() {
    console.log('Popping corn!');
  }
}

class Amplifier {
  on() {
    console.log('Amp is turning on...');
  }
  off() {
    console.log('Amp is turning off...');
  }
  setSource(source: string) {
    console.log(`setting source to ${source}`);
  }
  setVolume(volume: number) {
    console.log(`setting the volume to ${volume}`);
  }
}

class BlueRay {
  turOn() {
    console.log('BlueRay turning on...');
  }
  turOff() {
    console.log('BlueRay turning off...');
  }
  play() {
    console.log('BlueRay playing...');
  }
}