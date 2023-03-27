const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const languageRouter = require("./router/language");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

require("dotenv").config();
const { I18n } = require("i18n");

const port = process.env.PORT || 3000;

const i18n = new I18n({
  locales: ["en", "hi", "gu", "sp"],
  directory: path.join(__dirname, "translation"),
  defaultLocale: "en",
});

app.use(i18n.init);
app.set("view engine", "ejs");

app.use("/", languageRouter);

app.listen(port, () => {
  console.log("server is listen on port " + port);
});
