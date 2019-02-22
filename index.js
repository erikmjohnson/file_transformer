'use strict';

const os = require('os');
const fs = require('fs');
//GLOBAL VARIABLES
const newCode = [];
let codeLine1 = "'use strict;'";
let codeLine2 = "const peopleNames = ['Erik', 'Nikki', 'Rick'];";
let codeLine3 = "peopleNames.forEach(x => console.log(x));";
let buffer = Buffer.alloc(103);

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

//CALLS
buffOut(codeLine1);
buffOut(codeLine2);
buffOut(codeLine3);
letsGitStringy(buffer);

fs.writeFile('files/loop.js', buffer , function (err) {
  if (err) throw err;
  console.log('works?');
});
