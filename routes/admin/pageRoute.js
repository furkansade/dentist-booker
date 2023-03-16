const express = require("express");
const pageController = require("../../controllers/admin/pageController");

const router = express.Router();

router.route("/profile").get(pageController.getProfilePage);

module.exports = router;
