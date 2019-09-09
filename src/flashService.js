import { ON, OFF } from './led';

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
