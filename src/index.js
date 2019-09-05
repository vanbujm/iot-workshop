/* eslint-disable no-console */
import express from 'express';
import { init } from 'raspi';
import { LED, } from 'raspi-led';
import { flashLED, turnOffLED } from './flashService';

const parseSpeed = (speed) => {
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
