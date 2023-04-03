const mongoose = require("mongoose");

const { Schema } = mongoose;

const jobSchema = new Schema({
  company: {
    type: String,
    required: [true, "please provide your company name"],
  },
  position: {
    type: String,
    required: [true, "please provide job title"],
  },
  status: {
    type: String,
  },
  jobType: {
    type: String,
    required: [true, "please provide job type"],
  },
  jobLocation: {
    type: String,
    required: [true, "please provide job location"],
  },
  createdBy: {
    type: mongoose.ObjectId,
    ref: "User",
  },
});

modeule.exports = mongoose.model("Job", jobSchema);
