const express = require("express");

const pageController = require("../../controllers/site/pageController");

const router = express.Router();

router.route("/").get(pageController.getHomePage);

module.exports = router;
