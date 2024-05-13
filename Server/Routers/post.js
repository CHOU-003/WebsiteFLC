import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost, managerPost } from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts)
router.get("/manu", managerPost);
router.get("/:id", getPost)

router.post("/addpost", addPost)
router.put("/", updatePost);
router.delete("/:_id", deletePost)


export default router;