const Doctor = require("../../models/Doctor");
const Appointment = require("../../models/Appointment");
const fs = require("fs");

exports.createDoctor = async (req, res) => {
  try {
    let uploadImage = req.files.photo;
    let uploadPath =
      __dirname + "/../../public/img/uploadDoctors/" + uploadImage.name;

    uploadImage.mv(uploadPath, async () => {
      await Doctor.create({
        ...req.body,
        photo: "/img/uploadDoctors/" + uploadImage.name,
      });

      req.flash("success", "Created doctor!");
      res.status(201).redirect("/admin/doctors");
    });
  } catch (error) {
    res.status(400).redirect("/admin/doctors");
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ _id: req.params.id });

    let uploadImage = doctor.photo;
    let uploadPath = __dirname + "/../../public/" + uploadImage;

    if (uploadImage) {
      fs.unlink(uploadPath, (err) => {
        if (err) throw err;
      });
    }

    await Doctor.findByIdAndRemove(req.params.id);

    req.flash("success", "Deleted doctor!");
    res.status(200).redirect("/admin/doctors");
  } catch (error) {
    res.status(400).redirect("/admin/doctors");
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ _id: req.params.id });
    doctor.firstName = req.body.firstName;
    doctor.lastName = req.body.lastName;
    doctor.phone = req.body.phone;
    doctor.about = req.body.about;
    doctor.linkedinURL = req.body.linkedinURL;
    doctor.instagramURL = req.body.instagramURL;
    if (req.body.photo) {
      doctor.photo = req.body.photo;
    }
    await doctor.save();

    res.status(200).redirect("/admin/doctors");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
