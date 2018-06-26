"use strict";
exports.__esModule = true;
var adapter_1 = require("./adapter");
var iphone = new adapter_1.IPhone7();
var chargeAdapter = new adapter_1.LightningToMicroUSBAdapter(iphone);
chargeAdapter.useMicroUSB();
