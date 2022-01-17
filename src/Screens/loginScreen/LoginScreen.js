import React, { useState, useEffect } from "react";
import "./login.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserInfoAction } from "../../Redux/actions/userAction";

export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.getUserInfo);

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            username: username,
            password: password,
        };

        dispatch(getUserInfoAction(data));
        setUserName("");
        setPassword("");
    }

    useEffect(() => {
        if (userInfo?.username) {
            navigate("/");
        } else {
            navigate("/login");
        }
    }, [userInfo, navigate]);

    return (
        <div className="Login">
            <div>
                <h2 style={{ color: "#333", marginBottom: "3rem" }}>Sign In</h2>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        className="form-control"
                        type="text"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        className="form-control"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button disabled={!validateForm()} className="btn btn-lg">
                    Login
                </button>
            </form>
        </div>
    );
}
