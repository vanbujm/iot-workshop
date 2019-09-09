/* eslint-disable import/order,import/no-extraneous-dependencies,import/no-unresolved */

const raspi =
  process.platform === 'linux'
    ? require('raspi')
    : require('../__mocks__/raspi');

const raspiLed =
  process.platform === 'linux'
    ? require('raspi-led')
    : require('../__mocks__/raspi-led');

export const { ON, OFF, LED } = raspiLed;
export const { init } = raspi;

export default {
  ON,
  OFF,
  init,
  LED
};
