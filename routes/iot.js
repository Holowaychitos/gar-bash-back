
const Point = require('../models/point')

module.exports = function (router) {
  router.post('/iot', async (ctx, next) => {
    console.warn(JSON.stringify(ctx.request.body, null, 2))
    ctx.body = {
      message: 'Ok!'
    }
  })
}
