const express = require("express");
const mongoose = require("mongoose")

const sitePageRoute = require("./routes/site/sitePageRoute");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/sadeDentDB").then(() => {
  console.log("connected database!")
})

app.use(express.static("public"));

app.set("view engine", "ejs");

// SITE ROUTES
app.use("/", sitePageRoute);

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`listening to: ${PORT}`);
});
