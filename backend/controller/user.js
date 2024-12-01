const { db } = require("../connect.js");


exports.getUser = function(req, res) {
  const username = req.params.username;
  const q = "SELECT * FROM users WHERE username=?";

  db.query(q, [username], function(err, data) {
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
    
  });
  console.log(username)
};