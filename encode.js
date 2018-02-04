
var b64string = 'AQ8Y=='
// var buf = new Buffer(b64string, 'base64')
var decoded = new Buffer(b64string, 'base64').toString('ascii')

console.warn(decoded)
