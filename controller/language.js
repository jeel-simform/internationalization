const getLanguage = (req, res) => {
  res.setLocale(req.cookies.language);
  res.render("index", {
    message: res.__("message"),
  });
};

const postLanguage = (req, res) => {
  res.cookie("language", req.body.language);
  res.redirect("/");
};

module.exports = {
  getLanguage,
  postLanguage,
};
