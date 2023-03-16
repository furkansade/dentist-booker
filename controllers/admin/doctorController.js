const Doctor = require("../../models/Doctor");

exports.createDoctor = async (req, res) => {
  try {
    await Doctor.create(req.body);

    res.status(201).redirect("/admin/doctors");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
