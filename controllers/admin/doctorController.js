const Doctor = require("../../models/Doctor");

exports.createDoctor = async (req, res) => {
    try {
      const doctor = await Doctor.create(req.body);
  
      res.status(201).json({
        status: "success",
        doctor
      });
     
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        error,
      });
    }
  };
