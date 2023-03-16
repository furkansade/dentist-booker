exports.getProfilePage = async (req, res) => {
  res.status(200).render("admin/profile", {
    pageName: "profile",
  });
};
exports.getAppointmentsPage = async (req, res) => {
  res.status(200).render("admin/appointments", {
    pageName: "appointments",
  });
};
exports.getDepartmentsPage = async (req, res) => {
  res.status(200).render("admin/deparments", {
    pageName: "deparments",
  });
};
exports.getDoctorsPage = async (req, res) => {
  res.status(200).render("admin/doctors", {
    pageName: "doctors",
  });
};
exports.getFaqsPage = async (req, res) => {
  res.status(200).render("admin/faqs", {
    pageName: "faqs",
  });
};
