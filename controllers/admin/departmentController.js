const Department = require("../../models/Department")

exports.createDepartment = async (req, res) => {
    await Department.create(req.body)

    res.status(201).redirect("/admin/departments")
}