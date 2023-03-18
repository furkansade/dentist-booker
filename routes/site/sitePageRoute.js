const express = require("express");

const pageController = require("../../controllers/site/pageController");
const appointmentController = require("../../controllers/site/appointmentController");

const router = express.Router();

router.route("/").get(pageController.getHomePage);
router.route("/appointments").post(appointmentController.createAppointment)


module.exports = router;
