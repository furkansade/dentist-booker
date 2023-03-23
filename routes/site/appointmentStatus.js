const express = require("express");

const appointmentController = require("../../controllers/site/appointmentController");


const router = express.Router();

router.route("/:id").put(appointmentController.updateAppointmentStatus);
router.route("/status").post(appointmentController.showAppointmentStatus);



module.exports = router;
