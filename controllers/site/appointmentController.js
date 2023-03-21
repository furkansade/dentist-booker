const Appointment = require("../../models/Appointment");

exports.createAppointment = async (req, res) => {
  await Appointment.create(req.body);

  res.status(201).redirect("/");
};

exports.updateAppointmentStatus = async (req, res) => {
  const appointment = await Appointment.findOne({ _id: req.params.id });
  appointment.status = req.body.status;
  appointment.save();

  res.status(200).redirect("/users/profile");
};

exports.showAppointmentStatus = async (req, res) => {
  const appointment = await Appointment.findOne({ _id: req.params.id });

  res.status(200).redirect("/users/profile", {
    appointment
  });
};
