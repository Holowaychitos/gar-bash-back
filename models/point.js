
'use strict'
const mongoose = require('mongoose')

const PollSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.Number
  },
  days: {
    type: [mongoose.Schema.Types.Number]
  },
  time: {
    type: mongoose.Schema.Types.Number
  },
  location: {
    type: mongoose.Schema.Types.Object
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Point', PollSchema)
