const Department = require("../../models/Department");
const Appointment = require("../../models/Appointment");
const fs = require("fs");

exports.createDepartment = async (req, res) => {
  try {
    let uploadImage = req.files.photo;
    let uploadPath =
      __dirname + "/../../public/img/uploadDepartments/" + uploadImage.name;

    uploadImage.mv(uploadPath, async () => {
      await Department.create({
        ...req.body,
        photo: "/img/uploadDepartments/" + uploadImage.name,
      });
    });
    res.status(201).redirect("/admin/departments");
  } catch (error) {
    res.status(400).redirect("/admin/departments");
  }
};

exports.deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findOne({ _id: req.params.id });

    let uploadImage = department.photo;
    let uploadPath = __dirname + "/../../public/" + uploadImage;

    fs.unlink(uploadPath, (err) => {
      if (err) throw err;
    });

    await Department.findByIdAndRemove(req.params.id);

    const appointment = await Appointment.findOne({
      department: req.params.id,
    });
    appointment.department = null;
    appointment.save();

    res.status(200).redirect("/admin/departments");
  } catch (error) {
    res.status(400).redirect("/admin/departments");
  }
};
