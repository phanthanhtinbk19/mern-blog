import axios from "axios";

import {
	registerFail,
	registerStart,
	registerSuccess,
} from "../redux/auth/authSlice";

const RegisterUser = async (user, dispatch, navigate) => {
	dispatch(registerStart());
	try {
		const res = await axios.post("/auth/register", user);
		dispatch(registerSuccess(res));
		navigate("/login");
	} catch (error) {
		dispatch(registerFail());
	}
};

export default RegisterUser;
