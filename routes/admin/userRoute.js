const express = require("express");

const authController = require("../../controllers/admin/authController");
const userController = require("../../controllers/admin/userController");

const router = express.Router();

router.route("/login").post(authController.loginAdmin);
router.route("/logout").get(authController.logoutAdmin);
router.route("/").post(userController.createUser);

module.exports = router;
