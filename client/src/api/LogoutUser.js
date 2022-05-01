import {logoutFail, logoutStart, logoutSuccess} from "../redux/auth/authSlice";
import {updateSuccess} from "../redux/user/userSlice";

const LogoutUser = async (dispatch, navigate) => {
	dispatch(logoutStart());
	try {
		localStorage.removeItem("user");
		const data = JSON.parse(localStorage.getItem("user"));
		dispatch(updateSuccess(data));
		dispatch(logoutSuccess());

		navigate("/login");
	} catch (error) {
		dispatch(logoutFail());
	}
};

export default LogoutUser;
