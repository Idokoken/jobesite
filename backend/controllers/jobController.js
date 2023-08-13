import Job from "../models/jobModel.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;

  try {
    if (!position || !company) {
      res.status(400).json("Please provide all input");
    }
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    console.log(job);
    res.status(200).json(job);
    // res.json("hello");
  } catch (error) {
    res.status(500).json(error);
  }
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
