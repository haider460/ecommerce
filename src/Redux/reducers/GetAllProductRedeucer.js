import { createSlice } from "@reduxjs/toolkit";

const getAllProductsSlice = createSlice({
    name: "getAllProduct",
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

export const getAllProductSliceReducer = getAllProductsSlice.actions;
export default getAllProductsSlice;
