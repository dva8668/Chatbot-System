const express = require("express");
const router = express.Router();
const UsersController = require("../app/controllers/UsersController");

router.post("/create", UsersController.post);
router.use("/", UsersController.show);

module.exports = router;
