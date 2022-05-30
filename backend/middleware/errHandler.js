const errHandlerMiddleware = (err, req, res, next) => {
	console.log(err)
	res.status(500).json({msg: 'there was an err'})
}

module.exports = errHandlerMiddleware
