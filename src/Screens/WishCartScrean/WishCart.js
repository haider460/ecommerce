import React from "react";
import "./WishCart.css";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItemWishListAction } from "../../Redux/actions/WishListAction";
import NoProduct from "../../component/utils/NoProduct";
import { AddToItemAction } from "../../Redux/actions/CartAction";

export default function WishCart() {
    const dispatch = useDispatch();
    const { wishList } = useSelector((state) => state.AddToWishList);

    return (
        <div>
            <div className="wish_list_header">
                <div>
                    <h1>Wishlist</h1>
                    <h4 className="font_colorHover">Shop</h4>
                </div>
            </div>
            <div className="links">
                <ul className="links-group container  ">
                    <li className=" font_color list-group-item">Home</li>
                    {" > "}
                    <li className="font_color list-group-item">Shop</li>
                    {" > "}
                    <li className="font_color list-group-item">Wish list</li>
                </ul>
            </div>
            {wishList?.length < 1 ? (
                <NoProduct />
            ) : (
                <div className="wishlist_cart container">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col" className=" font_color product">
                                    Product
                                </th>
                                <th scope="col" className="font_color price">
                                    Price
                                </th>
                                <th
                                    scope="col"
                                    className="font_color stock_status"
                                >
                                    Stock status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishList?.map((data) => (
                                <tr className="table_data" key={data.id}>
                                    <td>
                                        <div className="image_div">
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
                                    </td>
                                    <td>
                                        <div className="price_value ">
                                            {data?.price}
                                        </div>{" "}
                                    </td>
                                    <td>
                                        <div className="stock_status_value">
                                            <p>In Stock</p>
                                            <button
                                                onClick={() => {
                                                    dispatch(
                                                        AddToItemAction(data)
                                                    );
                                                    dispatch(
                                                        RemoveItemWishListAction(
                                                            data
                                                        )
                                                    );
                                                }}
                                                className="btn"
                                            >
                                                Add to cart
                                            </button>
                                            <ImCross
                                                className="crossIcon"
                                                onClick={() =>
                                                    dispatch(
                                                        RemoveItemWishListAction(
                                                            data
                                                        )
                                                    )
                                                }
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
