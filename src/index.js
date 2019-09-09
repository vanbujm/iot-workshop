import express from 'express';

const parseSpeed = speed => {
  const speedNum = Number(speed);
  if (Number.isNaN(speedNum)) return null;
  return speedNum;
};

let ledInterval;

const app = express();
const port = 3000;

app.get('/', ({ query: { speed } }, res) => {
  const requestedSpeed = parseSpeed(speed);

  if (!requestedSpeed && ledInterval) {
    clearInterval(ledInterval);
    // Do something
    return res.send('Off');
  }

  const flashSpeed = requestedSpeed || 500;

  if (ledInterval) clearInterval(ledInterval);

  ledInterval = setInterval(() => {
    // Do something
  });

  return res.send(`✨  Flashing at ${flashSpeed}ms`);
});

app.listen(port, () => console.info(`🚀  App is listening on port ${port}!`));
