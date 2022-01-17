import { getAllCartProductSliceReducer } from "../reducers/CartReducer";

export const AddToItemAction = (item) => async (dispatch) => {
    try {
        dispatch(getAllCartProductSliceReducer.loadingAction());

        dispatch(getAllCartProductSliceReducer.itemAddToCartAction(item));
    } catch (error) {
        dispatch(
            getAllCartProductSliceReducer.errorAction({
                payload: error.response,
            })
        );
    }
};

export const MinusItemToCartAction = (item) => async (dispatch) => {
    try {
        dispatch(getAllCartProductSliceReducer.loadingAction());

        dispatch(getAllCartProductSliceReducer.MinusItemAddToCartAction(item));
    } catch (error) {
        dispatch(
            getAllCartProductSliceReducer.errorAction({
                payload: error.response,
            })
        );
    }
};

export const RemoveItemFromCartAction = (item) => (dispatch) => {
    try {
        dispatch(getAllCartProductSliceReducer.loadingAction());
        dispatch(getAllCartProductSliceReducer.itemRremoveFromCart(item));
    } catch (error) {
        dispatch(
            getAllCartProductSliceReducer.errorAction({
                payload: error.response,
            })
        );
    }
};
