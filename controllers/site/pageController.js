exports.getHomePage = async (req, res) => {
  res.status(200).render("site/index", {
    pageName: "home",
  });
};
