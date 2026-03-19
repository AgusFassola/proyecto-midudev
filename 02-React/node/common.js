const {sum} = require('./math');

const result = sum(2,3);
console.log('El resultado es ${result}');

//VERSION ANTIGUA: en math.js deberia ir:

const num = (a,b) => a+b;
module.exports = {sum}