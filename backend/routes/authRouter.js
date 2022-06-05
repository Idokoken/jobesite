const express = require('express')
const {register, login, updateUser } = require('../controllers/authController.js')
const User = require('../models/userModel')
//import {register, login, updateUser } from '../controller/authController.js'

const authRouter = express.Router()

authRouter.route('/register').post(register)
authRouter.route('/login').post(login)
authRouter.route('/update').patch(updateUser)


module.exports = authRouter