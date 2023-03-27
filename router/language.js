const express = require("express");

const router = express.Router();
const { getLanguage, postLanguage } = require("../controller/language");
router.get("/", getLanguage);

router.post("/", postLanguage);

module.exports = router;
