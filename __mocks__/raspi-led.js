export const ON = 'ON';
export const OFF = 'OFF';

export class LED {
  constructor() {
    this.led = OFF;
  }

  read() {
    return this.led;
  }

  write(ledStatus) {
    this.led = ledStatus;
    // eslint-disable-next-line no-console
    console.info(`${ledStatus === ON ? '💚' : '❤️ ' } On board LED is now ${ledStatus}`);
  }
}

export default { ON, OFF };
