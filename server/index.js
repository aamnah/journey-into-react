const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      app = express()

const port = 3000

const router = require('./router')

// initialize our server, defining what we want our "app" to use to run our API.
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
router(app)

// start our server
app.listen(port)
console.info('Your server is running on port ' + port)