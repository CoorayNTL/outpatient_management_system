import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const PatientSchema = new mongoose.Schema({
  liked_healProfessionals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HealthProfessional",
    },
  ],
  appointement: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
});

PatientSchema.plugin(aggregatePaginate);

const Patient = mongoose.model("Patient", PatientSchema);

export default Patient;
