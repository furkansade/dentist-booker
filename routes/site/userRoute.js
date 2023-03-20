const express = require("express");

const authController = require("../../controllers/site/authController");
const authMiddleware = require("../../middlewares/authMiddleware")

const router = express.Router();

router.route("/login").post(authController.loginDoctor);
router.route("/profile").get(authMiddleware,authController.doctorProfile);
router.route("/logout").get(authController.logoutDoctor)

module.exports = router;
