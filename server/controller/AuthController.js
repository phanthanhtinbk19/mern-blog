import {UserModel} from "../models/User.js";
import bcrypt from "bcrypt";
export const registerAuth = async (req, res) => {
	const {username, password, email} = req.body;
	const salt = await bcrypt.genSalt(10);
	const hashed = await bcrypt.hash(password, salt);
	try {
		const newUser = new UserModel({
			username: username,
			password: hashed,
			email: email,
		});
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const loginAuth = async (req, res) => {
	try {
		const user = await UserModel.findOne({username: req.body.username});
		if (!user) {
			return res.status(404).json("Login failure");
		}

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);

		if (!validPassword) {
			return res.status(404).json("Incorect password");
		}
		if (user && validPassword) {
			const {password, ...other} = user._doc;
			res.status(200).json(other);
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
