const {StatusCodes} = require('http-status-codes')

const errHandlerMiddleware = (err, req, res, next) => {
	console.log(err)
	const defaultError = {
		statusCode: statusCodes.INTERNAL.SERVER.ERROR,
		msg: "something went wrong, try again later"
	}
	res.status(defaultError.status.Code).json({msg: err})
}



/*const errHandlerMiddleware = (err, req, res, next) => {
	console.log(err)
	res.status(500).json({msg: err})
}
*/
module.exports = errHandlerMiddleware