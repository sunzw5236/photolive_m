const express = require('express')
const app = express()

// 设置跨域
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', '3.2.1')
  res.header('Content-type', 'application/json;charset=utf-8')
  next()
})

// 注册 解析表单的body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

const server = app.listen(3001, () => {
    const host = server.address().address
    const port = server.address().port
    console.log('Listen at http://%s:%s', host, port)
  })

// exports.app
module.exports = app
