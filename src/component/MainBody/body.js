import React, { useEffect, useState } from "react";
import "./main2.css";
import { BsHeart } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductAction } from "../../Redux/actions/AllProductAction";
import { AddToItemAction } from "../../Redux/actions/CartAction";
import { AddToItemWishListAction } from "../../Redux/actions/WishListAction";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Body() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.getAllProducts);
    const [showProduct, setShowProduct] = useState(5);

    useEffect(() => {
        dispatch(getAllProductAction());
    }, [dispatch]);

    return (
        <div className="container-fluid">
            {products["loading"] ? (
                <div className="text-center loading">
                    <div
                        className="spinner-border "
                        style={{
                            marginTop: "4rem",
                            width: "7rem",
                            height: "7rem",
                        }}
                        role="status"
                    >
                        <span className="sr-only"></span>
                    </div>
                </div>
            ) : (
                <>
                    <div className="body_container">
                        {products["data"]?.slice(0, showProduct).map((data) => (
                            <div className="div_1 " key={data.id}>
                                <div>
                                    <img
                                        src={data?.image}
                                        className="Front_img"
                                        alt="img"
                                    />
                                </div>
                                <div>
                                    <small className="font_colorHover description">
                                        Depending on your number of cards, you{" "}
                                    </small>
                                    <small className="font_colorHover">
                                        $ {data.price}
                                    </small>
                                    <div
                                        className="product_btn"
                                        onClick={() =>
                                            dispatch(AddToItemAction(data))
                                        }
                                    >
                                        <small
                                            className="addToCart font_colorHover"
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            Add To Cart
                                        </small>
                                        <small
                                            className="addToCart font_colorHover"
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            Quick View
                                        </small>
                                    </div>
                                </div>
                                <div>
                                    <p
                                        onClick={() =>
                                            dispatch(
                                                AddToItemWishListAction(data)
                                            )
                                        }
                                        className=" Product_wish_btn btn "
                                    >
                                        add to wish{" "}
                                        <BsHeart style={{ fontWeight: 800 }} />
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="Show_btn">
                        {
                            <button
                                className="btn "
                                onClick={() => {
                                    products["data"]?.length > showProduct
                                        ? setShowProduct(showProduct + 5)
                                        : setShowProduct(5);
                                }}
                            >
                                {products["data"]?.length > showProduct
                                    ? "More Product"
                                    : "Go Back"}
                                <IoIosArrowRoundForward
                                    style={{ fontSize: "2rem" }}
                                />
                            </button>
                        }
                    </div>
                </>
            )}
        </div>
    );
}
