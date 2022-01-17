import { configureStore } from "@reduxjs/toolkit";
import getAllCartProductsSlice from "./reducers/CartReducer";
import getAllProductsSlice from "./reducers/GetAllProductRedeucer";
import getAllCategoriesSlice from "./reducers/CategoriesReducers";
import AddToWishListSlice from "./reducers/WishListReducer";
import getUserInfoSlice from "./reducers/userInfoReducer";

const store = configureStore({
    reducer: {
        getAllCartProducts: getAllCartProductsSlice.reducer,
        getAllProducts: getAllProductsSlice.reducer,
        getAllCategories: getAllCategoriesSlice.reducer,
        AddToWishList: AddToWishListSlice.reducer,
        getUserInfo: getUserInfoSlice.reducer,
    },
});

export default store;
