const { db } = require("../connect.js");



exports.getForm = function (req, res) {
  const q = "SELECT id, name, phone, email, assurance, message FROM form"; 

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

exports.addForm = function (req, res) {
  const q =
    "INSERT INTO form (`name`,`phone`,`email`, `assurance`, `message` ) VALUES (?)"; 

  const values = [
    req.body.name,
    req.body.phone,
    req.body.email,
    req.body.assurance,
    req.body.message,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Post created");
  
  });
  
};