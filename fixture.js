
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const Point = require('./models/point')

/*
[
  '12 PM ~ 1 AM'
  '1 AM ~ 2 AM'
  '2 AM ~ 3 AM'
  '3 AM ~ 4 AM'
  '4 AM ~ 5 AM'
  '5 AM ~ 6 AM'
  '6 AM ~ 7 AM'
  '7 AM ~ 8 AM'
  '8 AM ~ 9 AM'
  '9 AM ~ 10 AM'
  '10 AM ~ 11 AM'
  '11 AM ~ 12 AM'
  '12 AM ~ 1 PM'
  '1 PM ~ 2 PM'
  '2 PM ~ 3 PM'
  '3 PM ~ 4 PM'
  '4 PM ~ 5 PM'
  '5 PM ~ 6 PM'
  '6 PM ~ 7 PM'
  '7 PM ~ 8 PM'
  '8 PM ~ 9 PM'
  '9 PM ~ 10 PM'
  '10 PM ~ 11 PM'
  '11 PM ~ 12 PM'
]
*/

//  d  l  m  m  j  v  s
// [0, 0, 0, 0, 0, 0, 0]

const collection = [
  { owner: 123, days: [0, 1, 0, 0, 0, 1, 0], time: 2, location: {lat: 37.7899221, lon: -122.4093303} },
  { owner: 231, days: [0, 1, 0, 1, 0, 0, 0], time: 2, location: {lat: 37.7902049, lon: -122.4095533} },
  { owner: 321, days: [1, 0, 0, 0, 0, 0, 0], time: 4, location: {lat: 37.7906034, lon: -122.4055514} }
]

mongoose.connect(process.env.DATA_BASE, function (err, res) {
  if (err) process.exit(1)
  Point.insertMany(collection)
    .then(() => {
      console.log('Done!')
      process.exit(0)
    })
    .catch(e => console.error(e))
})
