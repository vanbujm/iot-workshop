/* eslint-disable no-console,import/no-extraneous-dependencies */
import express from 'express';
import { flashLED, turnOffLED } from './flashService';

let init;
let LED;
if (process.platform === 'linux') {
  init = require('raspi').init;
  LED = require('raspi-led').LED;
} else {
  init = require('../__mocks__/raspi').init;
  LED = require('../__mocks__/raspi-led').LED;
}

const parseSpeed = speed => {
  const speedNum = Number(speed);
  if (Number.isNaN(speedNum)) return null;
  return speedNum;
};

let ledInterval;

init(() => {
  const statusLed = new LED();

  const app = express();
  const port = 3000;

  app.get('/', ({ query: { speed } }, res) => {
    const requestedSpeed = parseSpeed(speed);

    if (!requestedSpeed && ledInterval) {
      clearInterval(ledInterval);
      turnOffLED(statusLed);
      return res.send('Off');
    }

    const flashSpeed = requestedSpeed || 500;

    if (ledInterval) clearInterval(ledInterval);

    ledInterval = setInterval(() => flashLED(statusLed), flashSpeed);

    return res.send(`Flashing at ${flashSpeed}ms`);
  });

  app.listen(port, () => console.info(`App listening on port ${port}!`));
});
