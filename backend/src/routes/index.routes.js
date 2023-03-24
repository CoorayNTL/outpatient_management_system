import express from "express";
import authRouter from "./auth";
import userRouter from "./user";
import patientRoute from "./patient.routes";
import healthProfessionalRoute from "./healthProfessional.route";
import sendEmailRouter from "./sendEmal.routes";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);

router.use("/patient", patientRoute);
router.use("/healthProfessional", healthProfessionalRoute);
router.use("/send", sendEmailRouter);
export default router;
