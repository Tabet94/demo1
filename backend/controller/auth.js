const { db } = require("../connect.js");
const jwt = require("jsonwebtoken");

exports.login = function(req, res) {
  const q = "SELECT id, username, password FROM users WHERE username = ?";

  db.query(q, [req.body.username], function(err, data) {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const user = data[0];

    
    if (req.body.password !== user.password) {
      return res.status(401).json("Invalid password!");
    }

    
    const token = jwt.sign({ id: user.id }, "secretkey");

    const { password, ...others } = user;

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};


exports.logout = function(req, res) {
  res.clearCookie("accessToken", {
    secure: true,
    sameSite: "none"
  }).status(200).json("User has been logged out.");
};