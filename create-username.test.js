const { expect } = require('@jest/globals');
const createUsername = require('./create-username');

describe('create-username', () => {
  it('should return a string without @', () => {
    const stringWithAT = 'test@test';
    const expectedUsername = 'testtest';

    const username = createUsername(stringWithAT);

    expect(username).toStrictEqual(expectedUsername);
  });

  it('should return a string without .', () => {
    const stringWithDot = 'test.test';
    const expectedUsername = 'testtest';

    const username = createUsername(stringWithDot);

    expect(username).toStrictEqual(expectedUsername);
  });

  it('should return a string without . and @', () => {
    const email = 'test@test.com';
    const expectedUsername = 'testtestcom';

    const username = createUsername(email);

    expect(username).toStrictEqual(expectedUsername);
  });
});
