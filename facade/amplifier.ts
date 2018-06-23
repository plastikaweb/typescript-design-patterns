export class Amplifier {
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
