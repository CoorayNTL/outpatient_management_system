import express from "express";
import { login, register } from "../controllers/auth";
import { regProtect } from "../middleware/auth";
const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", regProtect, register);

export default authRouter;
