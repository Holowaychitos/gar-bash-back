
const Point = require('../models/point')
const get = require('lodash/get')

module.exports = function (router) {
  router.get('/filter', async (ctx, next) => {
    let day = get(ctx.query, 'day', -1)
    let result = []
    if (day === -1) {
      result = await Point.find({})
      let count = await Point.count({})
      ctx.body = {
        total: count,
        match: count,
        payload: result
      }
    } else {
      result = await Point.find({ [`days.${day}`]: 1 })
      ctx.body = {
        total: await Point.count({}),
        match: result.length,
        payload: result
      }
    }
  })
  
  router.post('/filter', async (ctx, next) => {
    let { owner, days, time, location } = ctx.request.body
    let point = new Point({ owner, days, time, location })
    await point.save()
    ctx.body = point
  })
}
