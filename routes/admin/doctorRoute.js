const express = require("express");

const doctorController = require("../../controllers/admin/doctorController");


const router = express.Router();

router.route("/").post(doctorController.createDoctor);

module.exports = router;
