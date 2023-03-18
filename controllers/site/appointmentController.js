const Appointment = require("../../models/Appointment")

exports.createAppointment = async (req, res) => {
    await Appointment.create(req.body)

    res.status(201).redirect("/")
}