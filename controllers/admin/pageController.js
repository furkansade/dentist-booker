const Doctor = require("../../models/Doctor");
const Department = require("../../models/Department");
const User = require("../../models/User");
const Appointment = require("../../models/Appointment");
const FAQ = require("../../models/FAQ");

exports.getProfilePage = async (req, res) => {
  const user = await User.findOne({ _id: req.session.userID });

  res.status(200).render("admin/profile", {
    pageName: "profile",
    user,
  });
};
exports.getAppointmentsPage = async (req, res) => {
  const appointments = await Appointment.find().populate("doctor").populate("department");

  res.status(200).render("admin/appointments", {
    pageName: "appointments",
    appointments,
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
  const departments = await Department.find();

  res.status(200).render("admin/doctors", {
    pageName: "doctors",
    doctors,
    departments,
  });
};
exports.getFaqsPage = async (req, res) => {
  const faqs = await FAQ.find();

  res.status(200).render("admin/faqs", {
    pageName: "faqs",
    faqs,
  });
};
exports.getLoginPage = async (req, res) => {
  res.status(200).render("admin/adminLogin", {
    pageName: "adminLogin",
  });
};
