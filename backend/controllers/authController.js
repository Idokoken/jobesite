const User = require('../models/userModel')
const {StatusCodes} = require('http-status-codes')

 exports.register = async(req, res) => {
 	const {name, email, password, lastName, location} = req.body
 	const newUser = new User({name, email, password, lastName, location}) 	
 	 	const user = await newUser.save()
 		res.status(StatusCodes.Ok).json(user)
 	
 	/*catch(err) {
 		//res.status(500).json({msg: 'error registering'})
 		next(err)
 	}*/
}

 exports.login = async(req, res) => {
 	const {email, password} = req.body
	 try{
	 	let user = await User.findOne({email})
	 	user && res.status(200).json(user)
	 }catch(err){
	 	res.status(500).json({msg: 'error logining'})
	 }
}
 exports.updateUser = (req, res) => {
	 res.send('updateUser')
}