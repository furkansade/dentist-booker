//THIRD PARTY PACKAGE
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const fileUpload = require("express-fileupload");

//SITE ROUTE
const sitePageRoute = require("./routes/site/sitePageRoute");
const userRoute = require("./routes/site/userRoute");

//ADMIN ROUTE
const adminPageRoute = require("./routes/admin/pageRoute");
const doctorRoute = require("./routes/admin/doctorRoute");
const departmentRoute = require("./routes/admin/departmentRoute");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/sadeDentDB").then(() => {
  console.log("connected database!");
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.set("view engine", "ejs");

// SITE ROUTES
app.use("/", sitePageRoute);
app.use("/users", userRoute);

//ADMIN ROUTES
app.use("/admin", adminPageRoute);
app.use("/doctors", doctorRoute);
app.use("/departments", departmentRoute)

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`listening to: ${PORT}`);
});
