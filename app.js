var config = require('config')
var express = require('express')
var app = express()

const data = {
  data: 'hello-world',
  port: config.api.port,
  hostname: require('os').hostname()
}

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(data))
})

let server = app.listen(config.api.port, (error) => {
  if (error) return console.log(error)
  let host = server.address().address
  let port = server.address().port

  console.log(`app running at http://${host}:${port}`)
})

