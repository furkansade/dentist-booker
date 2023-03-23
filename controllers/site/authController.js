const bcrypt = require("bcrypt");
const Doctor = require("../../models/Doctor");
const Appointment = require("../../models/Appointment");

exports.loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;

    await Doctor.findOne({ email }).then((doctor) => {
      if (doctor) {
        bcrypt.compare(password, doctor.password, (err, same) => {
          if (same) {
            req.session.doctorID = doctor._id;
            res.status(200).redirect("/users/profile");
          } else {
            req.flash("error", "Email or Password not correct!");
            res.status(400).redirect("/login");
          }
        });
      } else {
        req.flash("error", "Doctor not exist!");
        res.status(400).redirect("/login");
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
    console.log(error);
  }
};

exports.doctorProfile = async (req, res) => {
  const doctor = await Doctor.findOne({ _id: req.session.doctorID });
  const appointments = await Appointment.find({ doctor: doctor._id });

  res.status(200).render("site/doctorProfile", {
    pageName: "doctorProfile",
    doctor,
    appointments,
  });
};

exports.logoutDoctor = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
