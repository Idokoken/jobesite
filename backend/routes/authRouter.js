import express from "express";
import {
  register,
  login,
  updateUser,
  deleteUser,
} from "../controllers/authController.js";
import authenticatedUser from "../middleware/auth.js";

const authRouter = express.Router();

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);
authRouter.route("/update").patch(authenticatedUser, updateUser);
authRouter.route("/delete/:id").delete(deleteUser);

export default authRouter;
