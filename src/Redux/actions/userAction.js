// import axios from "axios";
import { getUserInfoReducer } from "../reducers/userInfoReducer";

export const getUserInfoAction = (data) => async (dispatch) => {
    try {
        dispatch(getUserInfoReducer.loadingAction());

        // const { data } = await axios("https://fakestoreapi.com/auth/login", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         username: "mor_2314",
        //         password: "83r5^_",
        //     }),
        // });

        localStorage.setItem("userInfo", JSON.stringify(data));

        dispatch(getUserInfoReducer.successAction(data));
    } catch (error) {
        dispatch(
            getUserInfoReducer.errorAction({
                payload: error.response,
            })
        );
    }
};

export const userlogoutAction = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("wishList");
    localStorage.removeItem("cartItems");
};
