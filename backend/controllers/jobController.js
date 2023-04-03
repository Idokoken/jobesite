const createJob = (req, res) => {
  res.send("create");
};
const updateJob = (req, res) => {
  res.send("update job");
};
const deleteJob = (req, res) => {
  res.send("delete job");
};
const getAllJob = (req, res) => {
  res.send("get all job");
};
const getStat = (req, res) => {
  res.send("get job stat");
};

export { createJob, updateJob, deleteJob, getAllJob, getStat };
