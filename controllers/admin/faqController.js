const FAQ = require("../../models/FAQ")

exports.createFAQ = async (req, res) => {
    await FAQ.create(req.body);

    res.status(201).redirect("/admin/faqs")
}

exports.deleteFAQ = async (req, res) => {
    await FAQ.findByIdAndRemove(req.params.id);

    res.status(200).redirect("/admin/faqs")
}

