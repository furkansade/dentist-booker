//THIRD PARTY PACKAGE
const express = require("express");
const mongoose = require("mongoose");

//SITE ROUTE
const sitePageRoute = require("./routes/site/sitePageRoute");

//ADMIN ROUTE
const adminPageRoute = require("./routes/admin/pageRoute");
const doctorRoute = require("./routes/admin/doctorRoute");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/sadeDentDB").then(() => {
  console.log("connected database!");
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// SITE ROUTES
app.use("/", sitePageRoute);

//ADMIN ROUTES
app.use("/admin", adminPageRoute);
app.use("/doctors", doctorRoute);

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`listening to: ${PORT}`);
});
