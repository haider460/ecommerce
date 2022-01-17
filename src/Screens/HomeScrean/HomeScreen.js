import React, { useEffect } from "react";
import Carousel from "../../component/carousel/carousel";
import Main from "../../component/MainBody/body";
import Categories from "../../component/categories/categories";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HomeScreen() {
    const { userInfo } = useSelector((state) => state.getUserInfo);
    const nvgt = useNavigate();

    useEffect(() => {
        if (!userInfo?.username) {
            nvgt("/login");
        }
    }, [userInfo, nvgt]);
    return (
        <>
            <Carousel />
            <Categories />
            <Main />
        </>
    );
}
