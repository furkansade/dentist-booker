const express = require("express");

const authController = require("../../controllers/site/authController");

const router = express.Router();

router.route("/login").post(authController.loginDoctor);
router.route("/profile").get(authController.doctorProfile);

module.exports = router;
