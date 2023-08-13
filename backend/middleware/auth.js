import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  // const headers = req.headers;
  const authHeader = req.headers.authorization;
  // console.log(authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.status(400).json({ msg: "Authentication invalid" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    // console.log(payload);
    next();
  } catch (error) {
    res.status(400).json({ msg: "invalid Authentication" });
  }
};

export default auth;
