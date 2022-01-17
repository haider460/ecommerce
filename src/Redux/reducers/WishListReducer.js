import { createSlice } from "@reduxjs/toolkit";

const wishListStorage = localStorage.getItem("wishList")
    ? JSON.parse(localStorage.getItem("wishList"))
    : [];

const AddToWishListSlice = createSlice({
    name: "AddToWishList",
    initialState: {
        loading: false,
        error: "",
        wishList: wishListStorage,
    },
    reducers: {
        loadingAction(state) {
            state.loading = true;
        },
        itemAddToWishListAction(state, action) {
            let items = action.payload;

            let obj1 = state.wishList?.find(
                (entry) => entry["id"] === items["id"]
            );
            if (obj1) {
            } else {
                state.wishList = [...state.wishList, items];
            }
        },
        itemRremoveFromWishList(state, action) {
            let item = action.payload;
            state.wishList = state.wishList?.filter(
                (x) => x["id"] !== item["id"]
            );
        },
        clearWishList(state) {
            state.wishList = [];
        },
        errorAction(state, action) {
            state.error += action.payload;
            state.loading = false;
        },
    },
});

export const AddToWishListSliceReducer = AddToWishListSlice.actions;
export default AddToWishListSlice;
