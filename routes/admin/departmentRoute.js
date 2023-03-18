const express = require("express");

const departmentController = require("../../controllers/admin/departmentController");

const router = express.Router();

router.route("/").post(departmentController.createDepartment);
router.route("/:id").delete(departmentController.deleteDepartment);

module.exports = router;
