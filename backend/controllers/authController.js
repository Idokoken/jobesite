import User from "../models/userModel.js";
// import { StatusCodes } from "http-status-codes";

// register user
const register = async (req, res, next) => {
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
    res.status(200).json({
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

// login user
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(401).json({ msg: "please provide all fields" });
    }

    let user = await User.findOne({ email }).select("+password");
    //console.log(user)
    if (!user) {
      res.status(401).json({ msg: "Invalid Credentials" });
    }
    const checkPassword = await user.comparePassword(password);
    if (!checkPassword) {
      res.status(401).json({ msg: "Invalid Credentials" });
    }

    user.password = undefined;
    const token = user.createJWT();
    res.status(200).json({ user, token, location: user.location });
  } catch (err) {
    res.status(500).json({ msg: "error logining user" });
  }
};

// update user
const updateUser = async (req, res) => {
  // const { name, email, lastName, location } = req.body;
  // if (!name || !email || !lastName || !location) {
  //   res.status(400).json({ msg: "Please provide all values" });
  // }
  // const user = await User.findOne({ _id: req.user.userId });
  // user.name = name;
  // user.email = email;
  // user.lastName = lastName;
  // user.location = location;

  // await user.save();

  // const token = user.createJWT();
  // res.status(200).json({ user, token, location: user.location });
  res.json("hello update front");
  console.log("hello update");
};

// delete user
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "user deleted successfully" });
  } catch (error) {
    res.status(500).json(err);
  }
};

export { register, login, updateUser, deleteUser };
