import { IPhone7, LightningToMicroUSBAdapter } from './adapter';

const iphone = new IPhone7();
const chargeAdapter = new LightningToMicroUSBAdapter(iphone);
chargeAdapter.useMicroUSB();
