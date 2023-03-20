const express = require("express");
const pageController = require("../../controllers/admin/pageController");
const authMiddleware = require("../../middlewares/authMiddleware")
const redirectMiddleware = require("../../middlewares/redirectMiddleware");

const router = express.Router();

router.route("/profile").get(authMiddleware.authUser, pageController.getProfilePage);
router.route("/appointments").get(authMiddleware.authUser, pageController.getAppointmentsPage);
router.route("/departments").get(authMiddleware.authUser, pageController.getDepartmentsPage);
router.route("/doctors").get(authMiddleware.authUser, pageController.getDoctorsPage);
router.route("/faqs").get(authMiddleware.authUser, pageController.getFaqsPage);
router.route("/login").get(redirectMiddleware.redirectUser, pageController.getLoginPage);

module.exports = router;
