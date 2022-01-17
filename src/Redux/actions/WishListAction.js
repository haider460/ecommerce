import { AddToWishListSliceReducer } from "../reducers/WishListReducer";

export const AddToItemWishListAction = (item) => async (dispatch) => {
    try {
        dispatch(AddToWishListSliceReducer.loadingAction());

        dispatch(AddToWishListSliceReducer.itemAddToWishListAction(item));
    } catch (error) {
        dispatch(
            AddToWishListSliceReducer.errorAction({
                payload: error.response,
            })
        );
    }
};

export const RemoveItemWishListAction = (item) => async (dispatch) => {
    try {
        dispatch(AddToWishListSliceReducer.loadingAction());

        dispatch(AddToWishListSliceReducer.itemRremoveFromWishList(item));
    } catch (error) {
        dispatch(
            AddToWishListSliceReducer.errorAction({
                payload: error.response,
            })
        );
    }
};
