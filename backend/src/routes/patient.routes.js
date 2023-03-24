import express from "express";

import { addPatient } from "../controllers/patient.controller";
const patientRoute = express.Router();

patientRoute.post("/addPatient", addPatient);

module.exports = patientRoute;
