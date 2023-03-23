const User = require("../../models/User");
const bcrypt = require("bcrypt");

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    await User.findOne({ email }).then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, same) => {
          if (same) {
            req.session.userID = user._id;
            res.status(200).redirect("/admin/profile");
          } else {
            req.flash("error", "Email or Password not correct!");
            res.status(400).redirect("/admin/login");
          }
        });
      } else {
        req.flash("error", "Admin not exist!");
        res.status(400).redirect("/admin/login");
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

exports.logoutAdmin = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
