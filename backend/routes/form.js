const express = require("express");
const { getForm, addForm } = require("../controller/form.js");

const router = express.Router();

router.get("/", getForm)
router.post("/", addForm)

module.exports = router;