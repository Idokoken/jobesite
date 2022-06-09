const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
//require('dotenv').config()

const { Schema } = mongoose

const userSchema = new Schema({
	name: {
		type: String, 
		required: [true, 'please provide name'], 
		minLength: 3, 
		maxLength: 20, 
		trim: true
		},
	email: {
		type: String, 
		required: [true, 'please provide email'],  
		/*validate: {
			vaidator: validator.isEmail, 
			validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v) },
		message: 'please provide a valid email'
		},*/
		unique: true
		},
	password: {
		type: String, 
		required: [true, 'please provide password'], 
		minLength: 6,
		select: false
		},
	lastName: {
		type: String, 
	 maxLength: 20, 
	 trim: true,
	 default: 'lastname'
	 },
	 location: {
		type: String, 
	 maxLength: 20, 
	 trim: true,
	 default: 'My city'
	 },
}, {timestamp: true})

userSchema.pre('save', async function() {	
const salt = await bcrypt.genSaltSync(10);
this.password = await bcrypt.hashSync(this.password, salt)
 console.log(this.password)
});


userSchema.methods.createJWT = function() {
	return jwt.sign({userId: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
	
}

module.exports = mongoose.model('User', userSchema)