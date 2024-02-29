const mongoose = require('mongoose')

// const db = 'mongodb://localhost:27017/crudoperation'
// const db = 'mongodb://127.0.0.1:27017/crudoperation'
const db = 'mongodb://127.0.0.1:27017/crudoperation'


// mongoose.connect(db)

const connectDB = async () => {
	try{
		const conn = await mongoose.connect(db)
		console.log(`MongoDB connected!: ${conn.connection.host}`)
	} catch (error) {
		console.log(`Error: ${error.message}`)
		process.exit(1)
	}
}

module.exports = connectDB