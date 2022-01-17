import React, { useState, useEffect } from "react";
import "./Cart.css";
import { ImCross } from "react-icons/im";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import NoProduct from "../../component/utils/NoProduct";
import { HiOutlineShoppingCart } from "react-icons/hi";
import {
    AddToItemAction,
    MinusItemToCartAction,
    RemoveItemFromCartAction,
} from "../../Redux/actions/CartAction";

export default function Cart() {
    const { cartItems } = useSelector((state) => state.getAllCartProducts);
    const dispatch = useDispatch();

    let total = cartItems?.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue.price * currentValue.qty,
        0
    );
    const [totalCost, setTotalCost] = useState(total);

    useEffect(() => {
        setTotalCost(total);
    }, [total]);

    return (
        <div>
            <div className="cart_list_header">
                <div>
                    <h1>Shoping Cart</h1>
                    <h5 className="font_colorHover">Shop</h5>
                </div>
            </div>
            <div className="links">
                <ul className="links-group container  ">
                    <li className=" font_color list-group-item">Home</li>
                    {" > "}
                    <li className="font_color list-group-item">Shop</li>
                    {" > "}
                    <li className="font_color list-group-item">Cart</li>
                </ul>
            </div>
            {cartItems?.length < 1 ? (
                <NoProduct Icon={HiOutlineShoppingCart} text="Cart" />
            ) : (
                <div className="list_cart container">
                    <div className="cart_table">
                        <div className="table_heading">
                            <div className=" font_color cart_product">
                                Product
                            </div>
                            <div className="font_color cart_price">Price</div>
                            <div className="font_color cart_quntity">
                                Quntity
                            </div>
                            <div className="font_color cart_total">total</div>
                        </div>
                        {cartItems?.map((data) => (
                            <div className="cart_table_data" key={data.id}>
                                <div className="cart_image_div">
                                    <img
                                        src={data?.image}
                                        style={{
                                            maxWidth: "6rem",
                                            maxHeight: "4rem",
                                        }}
                                        alt="product"
                                    />
                                    <p>Beige V neck button cardigan</p>
                                </div>
                                <div className="cart_price">
                                    <p>
                                        $ {Math.round(data.price * 100) / 100}
                                    </p>
                                </div>
                                <div className="cart_quntity cart_quntity_value">
                                    <AiOutlinePlus
                                        onClick={() =>
                                            dispatch(AddToItemAction(data))
                                        }
                                        className="icon"
                                    />
                                    <p>{data?.qty}</p>
                                    <AiOutlineMinus
                                        onClick={() =>
                                            dispatch(
                                                MinusItemToCartAction(data)
                                            )
                                        }
                                        className="icon"
                                    />
                                </div>
                                <div className="cart_total_value">
                                    <p>
                                        $
                                        {(((data.price * 100) / 100) *
                                            (data?.qty * 100)) /
                                            100}
                                    </p>
                                    <ImCross
                                        onClick={() =>
                                            dispatch(
                                                RemoveItemFromCartAction(data)
                                            )
                                        }
                                        className="cart_crossIcon"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/*  card */}
                    <div className="card">
                        <div className="container">
                            <div className="card-body">
                                <h6 className="card-ti">Cart Total</h6>
                            </div>
                            <div className="card-body_subtotal">
                                <h6 className="card-Subtotal">
                                    Subtotal Total
                                </h6>
                                <h6 className="card-Subtotal_price">
                                    $ {(total * 100) / 100}
                                </h6>
                            </div>
                            <div className="card-body_shipping">
                                <h6 className="card-shipping">shippping:</h6>
                            </div>
                            <div className="card-body_delivery">
                                <p className="card-delivery">Subtotal Total</p>
                                <p className="card-delivery_price">$0.00</p>
                            </div>
                            <div className="card-body_delivery">
                                <p
                                    className="card-delivery"
                                    onClick={() => setTotalCost(total + 10)}
                                >
                                    Standard:
                                </p>
                                <p className="card-delivery_price">$10.00</p>
                            </div>
                            <div className="card-body_delivery">
                                <p
                                    className="card-delivery"
                                    onClick={() => setTotalCost(total + 30)}
                                >
                                    Express:
                                </p>
                                <p className="card-delivery_price">$30.00</p>
                            </div>
                            <div className="card-body_total">
                                <h6 className="card-Subtotal font_colorHover ">
                                    Total
                                </h6>
                                <h6 className="card-Subtotal font_colorHover">
                                    $ {(totalCost * 100) / 100}
                                </h6>
                            </div>
                            <div className="btn_div">
                                <button className="cart_btn">
                                    proceed to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
