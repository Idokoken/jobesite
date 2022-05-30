const express = require('express')
const {createJob, updateJob, deleteJob, getAllJob, getStat} = require('../controllers/jobController')

const jobRouter = express.Router()

jobRouter.route('/').post(createJob).get(getAllJob)
jobRouter.route('/stat').get(getStat)
jobRouter.route('/id').patch(updateJob).delete(deleteJob)


module.exports = jobRouter