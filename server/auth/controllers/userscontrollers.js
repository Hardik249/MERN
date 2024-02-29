console.log('auth')
const express = require('express')
const app = express.Router();
exports.list = (req, res) => {
	console.log('try status2')
	try{
		console.log('try status')
		return res.status(200).json({
			status: 'success',
			message: 'list here'
		})
	} catch (error) {
		console.log('catch')
		console.error(error)
		return res.status(404).json({
			status: 'failed',
			message: 'try again'
		})
	}
}

exports.a = () => {
	console.log(a)
}