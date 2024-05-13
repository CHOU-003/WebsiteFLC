import express from "express";
import { createProject, renderJob, deleteJob, editJob, managerJob, edit, add_ung_tuyen } from "../controllers/job.js";


const router = express.Router();

router.post("/create", createProject)
router.get("/alljob", renderJob)
router.get("/quanly", managerJob)
router.get("/:id", edit)
router.put("/:_id", editJob);
router.delete("/:_id", deleteJob)
router.put("/ungtuyen/:_id", add_ung_tuyen)



export default router;