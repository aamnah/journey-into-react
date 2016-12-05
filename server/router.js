const express = require('express')
const _testController = require('./controllers/_testController')

module.exports = function(app) {
  const apiRoutes = express.Router() // require express.Router() 

  // Routes go here
  // using the GET method, define a path for our route, and then tell it what function to call when that path is accessed
  apiRoutes.get('/hello', _testController.helloWorld)  

  app.use('/api', apiRoutes) // we will create the routes with the base URL /api. and express.Router() 
}