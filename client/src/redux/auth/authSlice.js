import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "counter",
	initialState: {
		login: {
			currentUser: JSON.parse(localStorage.getItem("user")) || null,
			isLoading: false,
			error: false,
		},

		register: {
			isLoading: false,
			success: false,
			error: false,
		},
	},
	reducers: {
		loginStart: (state) => {
			state.login.isLoading = true;
		},
		loginSuccess: (state, action) => {
			state.login.isLoading = false;
			state.login.currentUser = action.payload;
			state.login.error = false;
		},
		loginFail: (state) => {
			state.login.isLoading = false;
			state.login.error = true;
		},
		logoutStart: (state) => {
			state.login.isLoading = true;
		},
		logoutSuccess: (state) => {
			state.login.isLoading = false;
			state.login.currentUser = null;
			state.login.error = false;
		},
		logoutFail: (state) => {
			state.login.isLoading = false;
			state.login.error = true;
		},
		registerStart: (state) => {
			state.register.isLoading = true;
		},
		registerSuccess: (state) => {
			state.register.isLoading = false;
			state.register.success = true;
		},
		registerFail: (state) => {
			state.register.isLoading = false;
			state.register.error = true;
		},
	},
});

export const {
	loginStart,
	loginSuccess,
	loginFail,
	registerStart,
	registerSuccess,
	registerFail,
	logoutStart,
	logoutSuccess,
	logoutFail,
} = authSlice.actions;
export default authSlice.reducer;
