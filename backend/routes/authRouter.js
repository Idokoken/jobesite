import express from "express";
import {
  register,
  login,
  updateUser,
  deleteUser,
} from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);
authRouter.route("/update").put(updateUser);
authRouter.route("/delete").delete(deleteUser);
export default authRouter;
