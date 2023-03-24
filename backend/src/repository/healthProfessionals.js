import HealthProfessional from "../models/healthProfesional";
import mongoose from "mongoose";
import User from "../models/user";

export const getAllHealthProfessionals = async (data) => {
    return await User.find({ role: "HEALTH_PROF" }).select("-password").populate("healthProfessional");
};

export const insertHealthProfessional = async (data) => {
    return await new HealthProfessional(data).save();
};

export const findHealthProfessional = async (filters) => {
    return await HealthProfessional.findOne(filters);
};
