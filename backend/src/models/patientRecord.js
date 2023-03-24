import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const patientRecordSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "HealthProfessional",
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  description: {
    type: String,
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
  presciption: {
    type: String,
  },
});

patientRecordSchema.plugin(aggregatePaginate);

const Patient = mongoose.model("appointmentSchema", patientRecordSchema);

export default Patient;
