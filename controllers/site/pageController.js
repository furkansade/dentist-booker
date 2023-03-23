const Doctor = require("../../models/Doctor");
const Department = require("../../models/Department");

exports.getHomePage = async (req, res) => {
  const doctors = await Doctor.find().populate("department");
  const departments = await Department.find();

  res.status(200).render("site/index", {
    pageName: "home",
    doctors,
    departments,
  });
};

exports.getDoctorLoginPage = async (req, res) => {
  res.status(200).render("site/doctorLogin", {
    pageName: "doctorProfile",
  });
};
