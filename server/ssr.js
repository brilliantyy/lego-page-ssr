const path = require('path')
const express = require('express')

const resolve = file => path.resolve(__dirname, file)
const app = express()

const isDev= process.env.NODE_ENV !== 'production'
const router = isDev ? require('./dev.ssr') : require('../server')

app.use(router.routes()).use(router.allowedMethods())
app.use('/', express.static(resolve('../dist')))

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})

module.exports = app