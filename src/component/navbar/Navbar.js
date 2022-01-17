import React, { useEffect } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { Link } from "react-router-dom";

import { userlogoutAction } from "../../Redux/actions/userAction";

export default function Navbar() {
    const { userInfo } = useSelector((state) => state.getUserInfo);
    const { cartItems } = useSelector((state) => state.getAllCartProducts);
    const { wishList } = useSelector((state) => state.AddToWishList);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userInfo?.username) {
            navigate("/login");
        }
    }, [userInfo, navigate]);

    const totalAmount = cartItems?.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue.price * currentValue.qty,
        0
    );

    const totalCartItems = cartItems?.reduce(
        (accumulator, currentValue) => accumulator + currentValue.qty,
        0
    );

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <Link
                    to="/"
                    className="navbar-brand"
                    style={{ fontWeight: 800, color: "#e0218a" }}
                >
                    MOLLA
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-between align-items-center ">
                        <div className="d-flex justify-content-between align-items-center margintop_2">
                            {userInfo?.username && (
                                <>
                                    {" "}
                                    <li className="  me-3 nav-item Minus1_margintop wishIcon font-size-16rem text-muded">
                                        <Link to="/view-wish-list">
                                            <BsHeart className="font_color heart" />
                                            <small className="wishItemsCount">
                                                {wishList?.length}
                                            </small>
                                        </Link>
                                    </li>
                                    <li className="nav-item me-3 Minus1_margintop font-size-16rem cartIcon text-muded">
                                        <Link to="/view-cart">
                                            <HiOutlineShoppingCart className="font_color" />
                                        </Link>
                                        <small className="cartItemsCount">
                                            {(totalCartItems * 100) / 100}
                                        </small>
                                    </li>
                                    <small className="font_color">
                                        $ {(totalAmount * 100) / 100}
                                    </small>{" "}
                                </>
                            )}

                            <li
                                style={{ marginLeft: "1rem" }}
                                className="nav-item me-3 Minus1_margintop font-size-16rem text-muded"
                            >
                                <button
                                    onClick={
                                        userInfo?.username
                                            ? () => {
                                                  dispatch(userlogoutAction());
                                                  window.location.reload(false);
                                              }
                                            : null
                                    }
                                    className="btn"
                                >
                                    {userInfo?.username
                                        ? "Sign Out"
                                        : "Sign In"}
                                </button>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
{
    /* <Link to="me">My Profile</Link>; */
}
