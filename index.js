#!/usr/bin/env node

var connect  = require('connect')
  , path 	 = require('path')
  , dirPath  = path.resolve( process.argv[2] )
  , PORT     = process.argv[3] || 3000
  , server   = connect()

server.use( connect.static( dirPath ) )
server.listen( PORT )
console.log('serving ' + dirPath + ' on port ' + PORT + ' ...')