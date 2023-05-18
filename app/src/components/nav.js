import { Link } from "react-router-dom";

import "./nav.css";
import login from "../icons/enter.png"

const Layout = () => {
    const username = "Login here";
    return (
        <>
            <nav class="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/CodePage">Code</Link>
                    </li>
                    <div class="navbar-right">
                        <li>{username}</li>
                        <li><Link to="/login" class="log_btn"><img src={login} alt="img" /></Link></li>
                    </div>
                </ul>
            </nav>

        </>
    )
};

export default Layout;
