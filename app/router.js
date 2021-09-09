
const express = require("express");

const tagController = require("./controllers/tagController");

const router = express.Router();


router.get("/tags", tagController.showTags);




















module.exports = router;