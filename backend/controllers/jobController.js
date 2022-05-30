
	exports.createJob = (req, res) => {
	 res.send('create')
}
exports.updateJob = (req, res) => {
	res.send('update job')
}
 exports.deleteJob = (req, res) => {
 res.send('delete job')
}
exports.getAllJob = (req, res) => {
 res.send('get all job')
}
exports.getStat = (req, res) => {
	res.send('get job stat')
}

//module.exports = {createJob, updateJob, deleteJob, getAllJob, getStat}
