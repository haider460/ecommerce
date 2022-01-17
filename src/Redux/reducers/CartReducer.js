import { createSlice } from "@reduxjs/toolkit";

const cartItemsStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const getAllCartProductsSlice = createSlice({
    name: "getAllCartProduct",
    initialState: {
        loading: false,
        error: "",
        cartItems: cartItemsStorage,
    },
    reducers: {
        loadingAction(state) {
            state.loading = true;
        },
        itemAddToCartAction(state, action) {
            let items = action.payload;
            let product = state.cartItems.find(
                (data) => data["id"] === items["id"]
            );

            if (product) {
                let obj = { ...product };
                obj["qty"]++;
                state.cartItems = state.cartItems.map((x) =>
                    x["id"] === obj["id"] ? obj : x
                );
            } else {
                const {
                    id,
                    title,
                    category,
                    description,
                    rating,
                    price,
                    image,
                } = items;
                const obj = {
                    id,
                    title,
                    category,
                    description,
                    rating,
                    price,
                    image,
                    qty: 1,
                };
                state.cartItems = [...state.cartItems, obj];
            }
        },
        MinusItemAddToCartAction(state, action) {
            let items = action.payload;
            let product = state.cartItems.find(
                (data) => data["id"] === items["id"]
            );
            let obj = { ...product };
            if (obj["qty"] > 1) {
                obj["qty"]--;
                state.cartItems = state.cartItems.map((x) =>
                    x["id"] === obj["id"] ? obj : x
                );
            }
        },
        itemRremoveFromCart(state, action) {
            let item = action.payload;
            state.cartItems = state.cartItems?.filter(
                (x) => x["id"] !== item["id"]
            );
        },
        cartClear(state) {
            state.cartItems = [];
        },
        errorAction(state, action) {
            state.error += action.payload;
            state.loading = false;
        },
    },
});

export const getAllCartProductSliceReducer = getAllCartProductsSlice.actions;
export default getAllCartProductsSlice;
