import mongoose, { Schema } from "mongoose";

const healthProfessionalSchema = new Schema(
    {
        educationQualifications: {
            type: String,
            required: true,
        },
        specialisation: {
            type: String,
            required: true,
        },
        available_date: {
            type: String,
            required: true,
        },
        available_time: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("HealthProfessional", healthProfessionalSchema);
