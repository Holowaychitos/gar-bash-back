
module.exports = async (ctx, next) => {
  try {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms, query: ${JSON.stringify(ctx.query)}, body: ${ctx.request.body}, at ${(new Date()).toISOString()}`)
  } catch (error) {
    console.log(`${ctx.method} ${ctx.url}, query: ${JSON.stringify(ctx.query)}, body: ${ctx.request.body}, at ${(new Date()).toISOString()}`)
    console.error(error)
    throw error
  }
}
