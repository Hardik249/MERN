const express = require('express')
const apiRoutes = express.Router();

const users = require('./users/usersroutes')


apiRoutes.use('/users', users)

module.exports = apiRoutes