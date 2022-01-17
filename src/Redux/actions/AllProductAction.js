import axios from "axios";
import { getAllProductSliceReducer } from "../reducers/GetAllProductRedeucer";

export const getAllProductAction = () => async (dispatch) => {
    try {
        dispatch(getAllProductSliceReducer.loadingAction());

        const { data } = await axios.get("https://fakestoreapi.com/products");

        dispatch(getAllProductSliceReducer.successAction(data));
    } catch (error) {
        dispatch(
            getAllProductSliceReducer.errorAction({
                payload: error.response,
            })
        );
    }
};
