import {CategoryModel} from "../models/Category.js";

export const createCategory = async (req, res, next) => {
	try {
		const newCategory = new CategoryModel(req.body);
		const category = await newCategory.save();
		res.status(200).json(category);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const getCategory = async (req, res, next) => {
	try {
		const cattegories = await CategoryModel.find();
		res.status(200).json(cattegories);
	} catch (error) {
		res.status(500).json(error);
	}
};
