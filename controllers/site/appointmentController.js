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
  try {
    const patientTC = req.body.patientTC;
    const patientMail = req.body.patientMail;

    // TC Kimlik Numarası ve e-posta adresiyle kullanıcıyı sorgula
    Appointment.findOne({ patientTC: patientTC, patientMail: patientMail }).then((appointment, err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Bir hata oluştu");
      } else if (!appointment) {
        res.status(404).send("Kullanıcı bulunamadı");
      } else {
        res.redirect("/");
      }
    })
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
    console.log(error);
  }
};
