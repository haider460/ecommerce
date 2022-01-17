import React from "react";
import { BsHeart } from "react-icons/bs";
import "./noproduct.css";
import { useNavigate } from "react-router-dom";

export default function NoProduct({ Icon, text }) {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="inner_container">
                <div className="no_product_container">
                    {Icon ? (
                        <Icon
                            style={{
                                width: "7rem",
                                height: "7rem",
                                color: "#333",
                            }}
                        />
                    ) : (
                        <BsHeart
                            style={{
                                width: "7rem",
                                height: "7rem",
                                color: "#333",
                            }}
                        />
                    )}
                    <p style={{ color: "#333" }}>
                        `No products added to the {text ? text : "wish"} list
                    </p>
                    <button onClick={() => navigate("/")} className="btn">
                        Return To Shop
                    </button>
                </div>
            </div>
        </div>
    );
}
