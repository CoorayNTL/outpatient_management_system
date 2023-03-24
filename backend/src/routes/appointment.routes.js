import express from "express";

import {
  addHealthProfessional,
  getAllHealthProfessionals,
  getHealthProfessionalsById,
  deleteHealthProfessional,
  updateHealthProfessional,
} from "../controllers/healthProfessionals.controller";
const deleteHealthProfessionalRoute = express.Router();

deleteHealthProfessionalRoute.post("/addProfessional", addHealthProfessional);

deleteHealthProfessionalRoute.get(
  "/allProfessional",
  getAllHealthProfessionals
);

deleteHealthProfessionalRoute.get(
  "/getProfessional/:id",
  getHealthProfessionalsById
);

deleteHealthProfessionalRoute.patch(
  "/updateProfessional/:id",
  updateHealthProfessional
);

deleteHealthProfessionalRoute.delete(
  "/deleteProfessional/:id",
  deleteHealthProfessional
);

module.exports = deleteHealthProfessionalRoute;
