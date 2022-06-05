const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const morgan = require('morgan')
const chalk = require('chalk')
const notFoundMiddleware = require('./middleware/notFound')
const errHandlerMiddleware = require('./middleware/errHandler')
require('dotenv').config()
const authRouter = require('./routes/authRouter')
const jobRouter = require('./routes/jobRouter')
require('express-async-errors');
//const keys = require('./src/config/key')

//app setup
const app = express()
const port = process.env.PORT 

//middleware setup
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//database setup
mongoose.connect('mongodb+srv://Ken_apps:Ken_apps@cluster0.npcrm.mongodb.net/Jobsite?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true})

//mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true})

const db = mongoose.connection
db.on('error', () => console.log('error connecting to database'))
db.once('open', () => console.log('connected to ' + chalk.cyan('wjobs database')))

//routes setup
app.get('/', () => {
	throw new Error('error')
	console.log('welcome')
}) 

app.use('/api/auth', authRouter)
app.use('/api/job', jobRouter)

app.use(notFoundMiddleware)
app.use(errHandlerMiddleware)


app.listen(port, () => console.log('listening on port ' + chalk.cyan(8000)))