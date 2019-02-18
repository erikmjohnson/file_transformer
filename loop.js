'use strict';

const os = require('os');
const fs = require('fs');


const peopleNames = ['Erik', 'Nikki', 'Karl', 'Jess', 'Rick'];

const buffedOut = () => {
    peopleNames.forEach(x => console.log(Buffer.from(x)));
};

buffedOut();

