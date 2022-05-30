const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
	name: {type: String},
	email: {type: String},
	cover: {type: String},
	created: {type: Date, required: true, default: Date()},
})

module.exports = mongoose.model('User', userSchema)