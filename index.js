
require('dotenv').config()

const Koa = require('koa')
const cors = require('kcors')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body')
const logger = require('./middlewares/logger')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const app = new Koa()
const router = new Router()
const environment = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 8080

require('./routes/filter')(router)

router.get('/', async (ctx, next) => {
  ctx.body = 'Super API'
})

if (environment === 'production') {
  console.log('Initializing helmet...')
  const helmet = require('koa-helmet')
  app.use(helmet())
}

app.use(cors())
app.use(koaBody({multipart: true}))
app.use(bodyParser())
app.use(logger)
app.use(router.routes()).use(router.allowedMethods())

mongoose.connect(process.env.DATA_BASE, function (err, res) {
  if (err) {
    console.log('ERROR connecting to: ' + process.env.DATA_BASE + '. ' + err)
    process.exit(1)
  }
  console.log('Succeeded connected to: Mongo DB')
  
  app.listen(port, function () {
    console.log(`Run in ${process.env.NODE_ENV || 'develepment'} mode`)
    console.log(`Server: http://localhost:${port}`)
  })
})
  

module.exports = app
