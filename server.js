// server.js
let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
let serveStatic = require('serve-static')

app = express()
app.use(serveStatic(__dirname + "/dist"))
app.use(bodyParser.json({ type: 'application/x-www-form-urlencoded'})) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

var port =process.env.PORT || 5000
app.listen(port)
 
console.log('server started '+ port)