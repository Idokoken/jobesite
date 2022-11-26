const User = require("../models/userModel");
const { StatusCodes } = require("http-status-codes");

exports.register = async (req, res, next) => {
  const { name, email, password, lastName, location } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ error: "fill all required fields" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400).json({ err: "email already in use" });
  }
  const newUser = new User({ name, email, password, lastName, location });

  try {
    const user = await newUser.save();
    const token = user.createJWT();
    res
      .status(200)
      .json({
        user: {
          name: user.name,
          email: user.email,
          lastName: user.lastName,
          location: user.location,
        },
        token,
      });
    //res.status(StatusCodes.Ok).json(user)
  } catch (err) {
    //res.status(500).json({msg: 'error registering'})
    next(err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    user && res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ msg: "error logining" });
  }
};
exports.updateUser = (req, res) => {
  res.send("updateUser");
};
