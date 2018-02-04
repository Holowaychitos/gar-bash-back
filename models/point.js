
'use strict'
const mongoose = require('mongoose')

const PollSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    index: true
  },
  days: {
    type: mongoose.Schema.Types.Array
  },
  time: {
    type: mongoose.Schema.Types.Date
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Point', PollSchema)
