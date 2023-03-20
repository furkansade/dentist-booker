const Doctor = require("../models/Doctor");

module.exports = (req, res, next) => {
  Doctor.findById(req.session.doctorID).then((doctor) => {
    if (!doctor) return res.redirect("/login");
    next();
  });
};
