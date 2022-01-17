import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./component/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScrean/HomeScreen";
import Cart from "./Screens/CartScrean/Cart";
import WishCart from "./Screens/WishCartScrean/WishCart";
import Footer from "./component/footer/footer";
import Login from "./Screens/loginScreen/LoginScreen";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
    const { userInfo } = useSelector((state) => state.getUserInfo);
    const nvgt = useNavigate();
    const { cartItems } = useSelector((state) => state.getAllCartProducts);
    const { wishList } = useSelector((state) => state.AddToWishList);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("wishList", JSON.stringify(wishList));

    useEffect(() => {
        if (!userInfo?.username) {
            nvgt("/login");
        }
    }, [userInfo, nvgt]);

    return (
        <>
            <Navbar />
            <div className="main_container">
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/view-wish-list" element={<WishCart />} />
                    <Route path="/view-cart" element={<Cart />} />
                </Routes>
                {userInfo?.username && <Footer />}
            </div>
        </>
    );
}

export default App;
