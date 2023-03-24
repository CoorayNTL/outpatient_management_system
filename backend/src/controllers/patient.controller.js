import asyncHandler from "../middleware/async";
import Patient from "../models/patient";

import { makeResponse } from "../utils/response";

//Adding a customer
const addPatient = asyncHandler(async (req, res) => {
  return await new Patient(req.body).save();
});

module.exports = {
  addPatient,
};
