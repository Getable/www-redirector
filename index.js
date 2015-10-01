'use strict'

var http = require('http')
  , statusCode = 301

http.createServer(function createServer (req, res) {
  var location

  if (!req.headers.host) {
    res.statusCode = 400
    res.end()
    return
  }

  location = 'https://www.' + req.headers.host.split(':')[0] + req.url
  console.info(location, req.headers)

  res.statusCode = statusCode
  res.setHeader('Connection', 'close')
  res.setHeader('Content-Length', '0')
  res.setHeader('Location', location)
  res.end()
})
  .on('listening', function onListening () {
    console.info(this.address(), 'listening')
  })
  .listen(process.env.PORT || 8020)
