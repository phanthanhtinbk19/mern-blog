import {PostModel} from "../models/Post.js";
import {UserModel} from "../models/User.js";

import bcrypt from "bcrypt";
export const updateUser = async (req, res) => {
	if (req.body.userId === req.params.id) {
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			req.body.password = await bcrypt.hash(req.body.password, salt);
		}
		try {
			const updatedUser = await UserModel.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{new: true}
			);
			res.status(200).json(updatedUser);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(401).json("You can update only your account!");
	}
};

export const deleteUser = async (req, res) => {
	if (req.body.userId === req.params.id) {
		try {
			const user = await UserModel.findById(req.params.id);
			try {
				await PostModel.deleteMany({username: user.username});
				await UserModel.findByIdAndDelete(req.params.id);
				res.status(200).json("User has been deleted");
			} catch (error) {
				res.status(500).json(error);
			}
		} catch (error) {
			res.status(404).json("User not found");
		}
	}
};
export const getUser = async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.id);
		const {password, ...others} = user._doc;
		res.status(200).json(others);
	} catch (error) {
		res.status(500).json(error);
	}
};
