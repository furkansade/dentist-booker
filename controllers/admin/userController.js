const User = require("../../models/User");

exports.createUser = async (req, res) => {
  await User.create(req.body);

  res.status(201).json({
    status: "success",
  });
};

exports.updateUser = async (req, res) => {
  const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body);
  
  res.status(200).redirect("/admin/profile");
};
