const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  patientName: String,
  patientTC: String,
  patientMail: String,
  patientPhone: String,
  patientMessage: String,
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
  status: {
    type: String,
    enum: ["approved", "pending", "cancelled", "disapproved", "expired"],
    default: "pending",
  },
  appoDate: {
    type: Date,
    default:Date.now()
  },
  appoTime: String,
  
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
