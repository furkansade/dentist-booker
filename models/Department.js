const mongoose = require("mongoose");
const slugify = require("slugify");

const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
  name: String,
  slug: String,
  about: String,
  photo: String,
});

DepartmentSchema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next();
});

const Department = mongoose.model("Department", DepartmentSchema);

module.exports = Department;
