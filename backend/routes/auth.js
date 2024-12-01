const express = require("express");
const { login, logout } = require("../controller/auth.js");

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);

module.exports = router;