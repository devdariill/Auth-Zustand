import jwt from "jsonwebtoken";
export const loginHandler = (req, res) => {
  // process the login request {email password}
  // valid
  // storen in db
  // generate token
  // issuer : quien creo el token - dominio del backend
  const token = jwt.sign({ test: "test" }, "secret", {
    expiresIn: 60 * 60 * 12,
  });
  return res.json({ token });
};
export const profileHandler = (req, res) => {
  res.json({ profiel: { username: req.user } });
};
