
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const Point = require('./models/point')

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
