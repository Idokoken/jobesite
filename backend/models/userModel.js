import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "please provide name"],
      minLength: 3,
      maxLength: 20,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "please provide email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "please provide password"],
      minLength: 6,
      select: false,
    },
    lastName: {
      type: String,
      maxLength: 20,
      trim: true,
      default: "lastname",
    },
    location: {
      type: String,
      maxLength: 20,
      trim: true,
      default: "My city",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hashSync(this.password, salt);
  console.log(this.password);
});

userSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

userSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

export default mongoose.model("User", userSchema);
