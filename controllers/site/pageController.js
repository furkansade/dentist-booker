const Doctor = require("../../models/Doctor");
const Department = require("../../models/Department");
const FAQ = require("../../models/FAQ");

exports.getHomePage = async (req, res) => {
  const doctors = await Doctor.find().populate("department");
  const departments = await Department.find();
  const faqs = await FAQ.find();


  res.status(200).render("site/index", {
    pageName: "home",
    doctors,
    departments,
    faqs
  });
};

exports.getDoctorLoginPage = async (req, res) => {
  res.status(200).render("site/doctorLogin", {
    pageName: "doctorProfile",
  });
};
