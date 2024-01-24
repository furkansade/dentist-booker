//THIRD PARTY PACKAGE
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const dotenv = require("dotenv");

const connectToDatabase = require("./helpers/db.js");

dotenv.config();
connectToDatabase();

//SITE ROUTE
const sitePageRoute = require("./routes/site/sitePageRoute");
const userRoute = require("./routes/site/userRoute");
const appointmentStatus = require("./routes/site/appointmentStatus");

//ADMIN ROUTE
const adminPageRoute = require("./routes/admin/pageRoute");
const doctorRoute = require("./routes/admin/doctorRoute");
const departmentRoute = require("./routes/admin/departmentRoute");
const adminUserRoute = require("./routes/admin/userRoute");
const faqRoute = require("./routes/admin/faqRoute");
const User = require("./models/User");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "my_keyboard-cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URI,
    }),
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});
app.use(fileUpload());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.set("view engine", "ejs");

global.doctorIN = null;
global.userIN = null;

async (req, res) => {
  const user = await User.findOne({_id: "65b10f70fba588c047947969"});
  res.locals.user = user;
  res.render('site/templates/_navbar');
}

// SITE ROUTES
app.use("*", (req, res, next) => {
  doctorIN = req.session.doctorID;
  next();
});
app.use("/", sitePageRoute);
app.use("/users", userRoute);
app.use("/appointments", appointmentStatus);

//ADMIN ROUTES
app.use("*", (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use("/doctors", doctorRoute);
app.use("/admin", adminPageRoute);
app.use("/departments", departmentRoute);
app.use("/admin/users", adminUserRoute);
app.use("/faqs", faqRoute);

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`listening to: ${PORT}`);
});
