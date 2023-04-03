import { StatusCodes } from "http-status-codes";

const errHandlerMiddleware = (err, req, res, next) => {
  console.log(err.message);

  const defaultError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "something went wrong, try again later",
  };

  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
  }

  //res.status(defaultError.statusCode).json({msg: err})

  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

/*const errHandlerMiddleware = (err, req, res, next) => {
	console.log(err)
	res.status(500).json({msg: err})	
}*/

export { errHandlerMiddleware };
