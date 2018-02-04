
const Point = require('../models/point')

module.exports = function (router) {
  router.get('/filter', async (ctx, next) => {
    ctx.body = await Point.find()
  })
}
