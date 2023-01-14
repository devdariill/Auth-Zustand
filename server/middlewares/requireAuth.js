import jwt from "jsonwebtoken";

export const requiereAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "NO Header" });
  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Invalid Token" });
  //ASYCRONO !!!
  jwt.verify(token, "secret", (err, user) => {
    if (err) return res.status(401).json({ message: "Invalid Verify" });
    console.log(user);
    req.user = user;
    next();
  });
  res.status(403).json({ message: "Error" });
};
