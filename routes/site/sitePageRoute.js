const express = require("express");

const pageController = require("../../controllers/site/pageController");
const appointmentController = require("../../controllers/site/appointmentController");
const redirectMiddleware = require("../../middlewares/redirectMiddleware");

const router = express.Router();

router.route("/").get(pageController.getHomePage);
router
  .route("/login")
  .get(redirectMiddleware.redirectDoctor, pageController.getDoctorLoginPage);
router.route("/appointments").post(appointmentController.createAppointment);

module.exports = router;
