const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FAQSchema = new Schema({
    question: String,
    answer: String
})

const FAQ = mongoose.model("FAQ", FAQSchema);

module.exports = FAQ;