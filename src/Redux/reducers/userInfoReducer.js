import { createSlice } from "@reduxjs/toolkit";

const userInfoFormStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : {};

const getUserInfoSlice = createSlice({
    name: "getUserInfo",
    initialState: {
        loading: false,
        error: "",
        userInfo: userInfoFormStorage,
    },
    reducers: {
        loadingAction(state) {
            state.loading = true;
        },
        successAction(state, action) {
            state.userInfo = action.payload;
            state.loading = false;
        },
        errorAction(state, action) {
            state.error += action.payload;
            state.loading = false;
        },
    },
});

export const getUserInfoReducer = getUserInfoSlice.actions;
export default getUserInfoSlice;
