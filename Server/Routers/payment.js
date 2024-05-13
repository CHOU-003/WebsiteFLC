import express from "express";
import { payment } from "../controllers/pay.js";


const router = express.Router();

router.post("/pay/:_id", payment)



export default router;