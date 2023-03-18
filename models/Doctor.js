const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const slugify = require("slugify");

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  doctorTC: String,
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

DoctorSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
