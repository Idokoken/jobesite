import express from "express";
import path from "path";
import mongoose from "mongoose";
import morgan from "morgan";
import chalk from "chalk";
import cors from "cors";
import { notFoundMiddleware } from "./middleware/notFound.js";
import { errHandlerMiddleware } from "./middleware/errHandler.js";
import * as dotenv from "dotenv";
dotenv.config();
import authRouter from "./routes/authRouter.js";
import jobRouter from "./routes/jobRouter.js";
import "express-async-errors";

//app setup
const app = express();
const port = process.env.PORT;

//middleware setup
app.use(morgan("dev"));
app.use(cors());
const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database setup
mongoose.connect(process.env.MONGO_URI2, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", () => console.log("error connecting to database"));
db.once("open", () =>
  console.log("connected to " + chalk.cyan("wjobs database"))
);

//routes setup
app.get("/api/v1", (req, res) => {
  res.json({ msg: "mele" });
  console.log("welcome");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/job", jobRouter);

app.use(notFoundMiddleware);
app.use(errHandlerMiddleware);

app.listen(port, () => console.log("listening on port " + chalk.cyan(8000)));
