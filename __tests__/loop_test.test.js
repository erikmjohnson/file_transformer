'use strict';

//GLOBAL VARIABLES
const newCode = [];
let buffer = Buffer.alloc(5);

// FUNCTIONS
const buffOut = (block) => {
  const breakString = block.split('');
  breakString.forEach(x => newCode.push(x.charCodeAt(0)));
  newCode.push(10);
};

const letsGitStringy = (buf) => {
  for (let i in newCode) {
    buf[i] = newCode[i];
  }
};

describe('Testing Functions', () => {
  it('Can it transfer string into Dec', () => {
    buffOut('test');
    expect(newCode).toEqual([116, 101, 115, 116, 10]);
  });
  it('Can new code come back as a string', () => {
    letsGitStringy(buffer);
    expect(buffer.length).toEqual(5);
  });
});