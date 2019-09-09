let ON;
let OFF;
if (process.platform === 'linux') {
  // eslint-disable-next-line import/no-unresolved
  const raspiLed = require('raspi-led');
  ON = raspiLed.ON;
  OFF = raspiLed.OFF;
} else {
  const raspiLed = require('../__mocks__/raspi-led');
  ON = raspiLed.ON;
  OFF = raspiLed.OFF;
}

export const flashLED = statusLed => {
  if (statusLed.read() === ON) {
    statusLed.write(OFF); // Turn off the status LED
  } else {
    statusLed.write(ON); // Turn on the status LED
  }
};

export const turnOffLED = statusLed => {
  statusLed.write(OFF);
};
