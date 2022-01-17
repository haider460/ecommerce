import { createSlice } from "@reduxjs/toolkit";

const getAllCategoriesSlice = createSlice({
    name: "getAllCategories",
    initialState: {
        loading: false,
        error: "",
        data: [],
    },
    reducers: {
        loadingAction(state) {
            state.loading = true;
        },
        successAction(state, action) {
            state.data = action.payload;
            state.loading = false;
        },
        errorAction(state, action) {
            state.error += action.payload;
            state.loading = false;
        },
    },
});

export const getAllCategoriesSliceReducer = getAllCategoriesSlice.actions;
export default getAllCategoriesSlice;
