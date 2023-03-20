exports.redirectDoctor = (req, res, next) => {
  if (req.session.doctorID) {
    return res.redirect("/users/profile");
  }
  next();
};

exports.redirectUser = (req, res, next) => {
  if (req.session.userID) {
    return res.redirect("/admin/profile");
  }
  next();
};
