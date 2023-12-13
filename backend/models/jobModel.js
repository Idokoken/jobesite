import mongoose from "mongoose";

const { Schema } = mongoose;

const jobSchema = new Schema(
  {
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
      enum: ["Interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Contract", "Intenship"],
      default: "Full-Time",
    },
    jobLocation: {
      type: String,
    },
    jobSituation: {
      type: String,
      enum: ["Onsite", "Hybrid", "Remote"],
      default: "Onsite",
    },
    jobDescription: { type: String },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
