module.exports = (req, res, next) => {
  if (req.session.doctorID) {
    return res.redirect("/users/profile");
  }
  next();
};
