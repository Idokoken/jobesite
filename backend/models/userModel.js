const mongoose = require('mongoose')
const validator = require('validator')

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
		minLength: 6
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

module.exports = mongoose.model('User', userSchema)