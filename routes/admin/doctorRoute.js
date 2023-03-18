const express = require("express");

const doctorController = require("../../controllers/admin/doctorController");

const router = express.Router();

router.route("/").post(doctorController.createDoctor);
router.route("/:id").get(doctorController.doctorProfile);
router.route("/:id").delete(doctorController.deleteDoctor);
router.route("/:id").put(doctorController.updateDoctor);

module.exports = router;
