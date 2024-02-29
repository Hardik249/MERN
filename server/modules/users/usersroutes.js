const express = require('express')
const app = express.Router();

const users = require('../../auth/controllers/userscontrollers')
const list = require('../../auth/controllers/list')


app.get('/list', users.list)
app.get('/a', list)

module.exports = app