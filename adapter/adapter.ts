import { Iphone, Android } from './models';

export class IPhone7 implements Iphone {
  useLightning() {
    console.log('Using lightning port...');
  }
}

class GooglePixel implements Android {
  useMicroUSB() {
    console.log('Using micro USB port...');
  }
}

export class LightningToMicroUSBAdapter implements Android {
  constructor(private iphone: Iphone) {}

  useMicroUSB() {
    console.log('I want to use micro USB, converting to lightning...');
    this.iphone.useLightning();
  }
}