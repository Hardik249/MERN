const express = require('express')
const cors = require('cors')
const connectDB = require('./db')
const router = require('./router')
const app = express();

const PORT = 8000

app.use(express.json())
app.use(cors())

connectDB()

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}...`)
})

// app.get('/', (req, res) => {
// 	// res.send('Hello!')
// 	res.json({
// 		status:200,
// 		message:"Welcome to Node.js!"
// 	})
// })

// app.use(router)