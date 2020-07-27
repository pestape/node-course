console.log('Starting')

setTimeout(() => {
    console.log('2 sec');

}, 2000);

setTimeout(() => {
    console.log('0 sec');

}, 0);
console.log('Stopping')

const request = require('request')