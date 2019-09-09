import { flashLED, turnOffLED } from './flashService';

const statusLedMock = {
  read: jest.fn(),
  write: jest.fn()
};

beforeEach(() => {
  statusLedMock.read.mockClear();
  statusLedMock.write.mockClear();
});

describe('flashService', () => {
  describe('flashLED', () => {
    it('toggles the status LED on and off', () => {
      statusLedMock.read.mockImplementation(() => 'OFF');

      flashLED(statusLedMock);

      expect(statusLedMock.read).toBeCalled();

      expect(statusLedMock.write).toBeCalledWith('ON');

      statusLedMock.read.mockClear();
      statusLedMock.write.mockClear();

      statusLedMock.read.mockImplementation(() => 'ON');

      flashLED(statusLedMock);

      expect(statusLedMock.write).toBeCalledWith('OFF');
    });
  });

  describe('turnOffLED', () => {
    it('Turns off the LED', () => {
      turnOffLED(statusLedMock);
      expect(statusLedMock.write).toBeCalled();
    });
  });
});
