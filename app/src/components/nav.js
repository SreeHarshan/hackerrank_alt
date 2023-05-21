import { Link } from "react-router-dom";
import React, {   } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import "./nav.css";
import LoginImg from "../icons/enter.png"


const Layout = ({username}) => {

    const location = useLocation();
    var data = location.state;
    const navigate = useNavigate();

    const loginf = () => {
        if (data == null)
            data = { login: false }
        navigate("/login", { state: data });
    };


    return (
        <nav>
            <div class="navbar">
                <ul>
                    <li>
                        <Link class="navitem" to="/">Home</Link>
                    </li>
                    <li>
                        <Link class="navbaritem" to="/CodePage">Code</Link>
                    </li>
                    <li>
                        <Link class="navbaritem" to="/contest">Contest</Link>
                    </li>
                    <div class="navright">
                        <li class="navitem">{username}</li>
                        <li style={{ paddingTop: 5 }}><button class="log_btn navitem" onClick={loginf}><img src={LoginImg} alt="img" /></button></li>
                    </div>
                </ul>
            </div>

        </nav>
    )
};

export default Layout;
