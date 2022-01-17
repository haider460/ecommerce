import axios from "axios";
import { getAllProductSliceReducer } from "../reducers/GetAllProductRedeucer";

export const getAllProductByCategoryAction = (categore) => async (dispatch) => {
    try {
        dispatch(getAllProductSliceReducer.loadingAction());

        const { data } = await axios.get(
            `https://fakestoreapi.com/products/category/${categore}`
        );

        dispatch(getAllProductSliceReducer.successAction(data));
    } catch (error) {
        dispatch(
            getAllProductSliceReducer.errorAction({
                payload: error.response,
            })
        );
    }
};
