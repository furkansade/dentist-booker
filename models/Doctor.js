const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
  about: String,
  photo: String,
  linkedinURL: String,
  instagramURL: String,
  email: String,
  password: String,
});

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
