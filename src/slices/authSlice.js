/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	token: localStorage.getItem("token")
		? safeParse(localStorage.getItem("token"))
		: null,
};

function safeParse(value) {
	try {
		return JSON.parse(value);
	} catch (error) {
		// In case of an error, return null or handle it appropriately
		return null;
	}
}

const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		setLoading(state, action) {
			state.loading = action.payload;
		},
		setToken(state, action) {
			state.token = action.payload;
		},
	},
});

export const { setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;
