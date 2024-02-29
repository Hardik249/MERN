console.log('users')
exports.list = async(req, res) => {
	try{
		console.log('try')
		return res.status(200).json({
			status: 'success',
			message: 'list here'
		})
	} catch (error) {
		console.error(error)
	}
}