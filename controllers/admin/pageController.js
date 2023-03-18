const Doctor = require("../../models/Doctor");
const Department = require("../../models/Department");

exports.getProfilePage = async (req, res) => {
  res.status(200).render("admin/profile", {
    pageName: "profile",
  });
};
exports.getAppointmentsPage = async (req, res) => {
  res.status(200).render("admin/appointments", {
    pageName: "appointments",
  });
};
exports.getDepartmentsPage = async (req, res) => {

  const departments = await Department.find();


  res.status(200).render("admin/departments", {
    pageName: "departments",
    departments,
  });
};
exports.getDoctorsPage = async (req, res) => {
  const doctors = await Doctor.find().populate("department");

  res.status(200).render("admin/doctors", {
    pageName: "doctors",
    doctors,
  });
};
exports.getFaqsPage = async (req, res) => {
  res.status(200).render("admin/faqs", {
    pageName: "faqs",
  });
};
