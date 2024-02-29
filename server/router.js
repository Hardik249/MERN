const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const api = require('./modules/routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', api)

// if route not found
app.use((req, res, next) => {
	return res.status(400).json({
		status: 'fail',
		message: 'bad request'
	})
})

module.exports = app