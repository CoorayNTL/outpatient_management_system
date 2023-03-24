import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const appointmentSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "HealthProfessional",
  },
  description: {
    type: String,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
  status: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

appointmentSchema.plugin(aggregatePaginate);

const Appointment = mongoose.model("appointmentSchema", appointmentSchema);

export default Appointment;
