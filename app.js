const express = require("express");

const sitePageRoute = require("./routes/site/sitePageRoute");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

// SITE ROUTES
app.use("/", sitePageRoute);

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`listening to: ${PORT}`);
});
