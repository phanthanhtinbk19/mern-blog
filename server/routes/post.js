import express from "express";
import {
	createPost,
	deletePost,
	getAllPosts,
	getPost,
	updatePost,
} from "../controller/PostController.js";

const router = express.Router();

router.post("/", createPost);
router.delete("/:id", deletePost);
router.get("/", getAllPosts);
router.get("/:id", getPost);
router.put("/:id", updatePost);

export default router;
