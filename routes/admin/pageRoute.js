const express = require("express");
const pageController = require("../../controllers/admin/pageController");

const router = express.Router();

router.route("/profile").get(pageController.getProfilePage);
router.route("/appointments").get(pageController.getAppointmentsPage);
router.route("/departments").get(pageController.getDepartmentsPage);
router.route("/doctors").get(pageController.getDoctorsPage);
router.route("/faqs").get(pageController.getFaqsPage);

module.exports = router;
