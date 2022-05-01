import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		userupdate: {
			user: JSON.parse(localStorage.getItem("user")) || null,
			isLoading: false,
			error: false,
		},
	},
	reducers: {
		updateStart: (state) => {
			state.userupdate.isLoading = true;
		},
		updateSuccess: (state, action) => {
			state.userupdate.isLoading = false;
			state.userupdate.user = action.payload;
			state.userupdate.error = false;
		},
		updateFail: (state) => {
			state.userupdate.isLoading = false;
			state.userupdate.error = true;
		},
	},
});

export const {updateStart, updateSuccess, updateFail} = userSlice.actions;
export default userSlice.reducer;
