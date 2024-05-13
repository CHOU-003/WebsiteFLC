import express from 'express';
import { renderCreator, deleteCreator, detailCreator, editCreator } from '../controllers/creator.js';

const router = express.Router();

router.get("/allcreator", renderCreator)
router.delete("/:_id", deleteCreator)
router.get("/:_id", detailCreator)
router.put("/:_id", editCreator)

export default router;