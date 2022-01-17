import axios from "axios";
import { getAllCategoriesSliceReducer } from "../reducers/CategoriesReducers";

export const getAllCategoriesAction = () => async (dispatch) => {
    try {
        dispatch(getAllCategoriesSliceReducer.loadingAction());

        const { data } = await axios.get(
            "https://fakestoreapi.com/products/categories"
        );

        dispatch(getAllCategoriesSliceReducer.successAction(data));
    } catch (error) {
        dispatch(
            getAllCategoriesSliceReducer.errorAction({
                payload: error.response,
            })
        );
    }
};
