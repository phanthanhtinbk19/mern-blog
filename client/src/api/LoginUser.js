import axios from "axios";

import {loginFail, loginStart, loginSuccess} from "../redux/auth/authSlice";
import {updateSuccess} from "../redux/user/userSlice";

const LoginUser = async (user, dispatch, navigate) => {
	dispatch(loginStart());
	try {
		const res = await axios.post("http://localhost:5000/api/auth/login", user);
		localStorage.setItem("user", JSON.stringify(res.data));
		dispatch(loginSuccess(res.data));
		dispatch(updateSuccess(res.data));
		navigate("/");
	} catch (error) {
		dispatch(loginFail());
	}
};

export default LoginUser;
