import express from "express"
const sendEmailRouter = express.Router()
import { sendEmail } from "../controllers/sendEmail.controller";
sendEmailRouter.post('/', sendEmail) //customer subscribes or unsub to company

export default sendEmailRouter
