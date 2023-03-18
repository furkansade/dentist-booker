const Doctor = require("../../models/Doctor");
const bcrypt = require("bcrypt");

exports.loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;

    await Doctor.findOne({ email }).then(doctor => {
      if (doctor) {
        bcrypt.compare(password, doctor.password, (err, same) => {
          if (same) {
            //USER SESSION
            res.status(200).send("You are logged in!");
          }
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
    console.log(error)
  }
};
