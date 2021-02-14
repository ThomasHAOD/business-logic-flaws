const { expect } = require('@jest/globals');
const canTransferFunds = require('./can-transfer-funds');

describe('can-transfer-funds', () => {
  it('should return true if amount is less than 10000', () => {
    const result = canTransferFunds(9999);
    expect(result).toBe(true);
  });

  it('should return true if amount is exactly 10000', () => {
    const result = canTransferFunds(10000);
    expect(result).toBe(true);
  });

  it('should return false if amount is more than 10000', () => {
    const result = canTransferFunds(10001);
    expect(result).toBe(false);
  });
});
