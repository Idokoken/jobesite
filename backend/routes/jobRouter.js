import express from "express";
import {
  createJob,
  updateJob,
  deleteJob,
  getAllJob,
  getStat,
} from "../controllers/jobController.js";

const jobRouter = express.Router();

jobRouter.route("/").post(createJob).get(getAllJob);
jobRouter.route("/stat").get(getStat);
jobRouter.route("/:id").patch(updateJob).delete(deleteJob);

export default jobRouter;
