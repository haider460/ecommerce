import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import "./categories.css";
import { getAllCategoriesAction } from "../../Redux/actions/CategoriesAction";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductByCategoryAction } from "../../Redux/actions/GetCategoriesData";
import { getAllProductAction } from "../../Redux/actions/AllProductAction";

function Categories() {
    const dispatch = useDispatch();
    const [category, setCategory] = useState("All");
    const { data } = useSelector((state) => state.getAllCategories);

    const getDataByCategory = (category) => {
        setCategory(category);
        dispatch(getAllProductByCategoryAction(category));
    };

    useEffect(() => {
        dispatch(getAllCategoriesAction());
    }, [dispatch]);

    return (
        <div className="container categories_container">
            <div
                className="categories_container-1 font_color "
                style={{ cursor: "pointer" }}
            >
                <FaBars className="me-2 font-size-16rem categories " />
                <span className="h5 ">Categories</span>
            </div>
            <div className="categories_container-2">
                <ul className="list-group1 list-group align-items-center">
                    <li
                        onClick={() => {
                            dispatch(getAllProductAction());
                            setCategory("All");
                        }}
                        className={`font_color list-group-item ${
                            category === "All" && "font_colorHover"
                        } `}
                    >
                        All
                    </li>
                    {data?.map((data) => (
                        <li
                            key={data}
                            onClick={() => getDataByCategory(data)}
                            className={`font_color list-group-item ${
                                category === data && "font_colorHover"
                            } `}
                        >
                            {data}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Categories;
