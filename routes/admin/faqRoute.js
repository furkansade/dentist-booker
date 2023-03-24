const express = require("express");

const faqController = require("../../controllers/admin/faqController");

const router = express.Router();

router.route("/").post(faqController.createFAQ);
router.route("/:id").delete(faqController.deleteFAQ);

module.exports = router;
