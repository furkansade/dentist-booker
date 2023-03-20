const Doctor = require("../models/Doctor");
const User = require("../models/User");

exports.authDoctor = (req, res, next) => {
  Doctor.findById(req.session.doctorID).then((doctor) => {
    if (!doctor) return res.redirect("/login");
    next();
  });
};

exports.authUser = (req, res, next) => {
  User.findById(req.session.userID).then((user) => {
    if (!user) return res.redirect("/admin/login");
    next();
  });
};
