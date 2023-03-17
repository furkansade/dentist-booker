const Doctor = require("../../models/Doctor");
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

      res.status(201).redirect("/admin/doctors");
    });
  } catch (error) {
    res.status(400).redirect("/admin/doctors");
    console.log(error);
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ _id: req.params.id });

      let uploadImage = doctor.photo;
      let uploadPath = __dirname + "/../../public/" + uploadImage;
  
      fs.unlink(uploadPath, (err) => {
        if (err) throw err;
        else console.log("deleted photo!");
      });

    await Doctor.findByIdAndRemove(req.params.id);

    res.status(200).redirect("/admin/doctors");
  } catch (error) {
    res.status(400).redirect("/admin/doctors");
    console.log(error);
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ _id: req.params.id });  
    doctor.firstName = req.body.firstName;
    doctor.lastName = req.body.lastName;
    doctor.phone = req.body.phone;
    doctor.department = req.body.department;
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
