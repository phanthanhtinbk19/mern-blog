import {PostModel} from "../models/Post.js";

export const createPost = async (req, res) => {
	try {
		const newPost = new PostModel(req.body);
		const result = await newPost.save();
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const deletePost = async (req, res, next) => {
	try {
		await PostModel.deleteOne({_id: req.params.id});
		res.status(200).json("delete succesfully");
	} catch (error) {
		res.status(500).json(error);
	}
};

export const updatePost = async (req, res, next) => {
	try {
		const updatePost = await PostModel.findByIdAndUpdate(
			{_id: req.params.id},
			req.body,
			{new: true}
		);
		res.status(200).json(updatePost);
	} catch (error) {
		res.status(500).json(error);
	}
};

//GET POST
export const getPost = async (req, res) => {
	try {
		const post = await PostModel.findById(req.params.id);
		res.status(200).json(post);
	} catch (err) {
		res.status(500).json(err);
	}
};

//GET ALL POST
export const getAllPosts = async (req, res) => {
	const username = req.query.user;
	const catName = req.query.cat;
	try {
		let post;
		if (username) {
			post = await PostModel.find({username});
		} else if (catName) {
			post = await PostModel.find({
				catName: {
					$in: [catName],
				},
			});
		} else {
			post = await PostModel.find();
		}
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json(error);
	}
};
