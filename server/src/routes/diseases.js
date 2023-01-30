const express = require("express");
const router = express.Router();
const DiseasesController = require("../app/controllers/DiseasesController");

router.use("/", DiseasesController.show);

module.exports = router;
