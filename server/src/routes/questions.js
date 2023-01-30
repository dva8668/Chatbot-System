const express = require("express");
const router = express.Router();
const QuestionController = require("../app/controllers/QuestionController");

router.use("/:id", QuestionController.getOne);
router.use("/", QuestionController.show);

module.exports = router;
