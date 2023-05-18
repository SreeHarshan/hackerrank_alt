import { Link } from "react-router-dom";

import "./nav.css";
import login from "../icons/enter.png"

const Layout = () => {
    const username = "Login here";
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
                    <div class="navright">
                        <li class="navitem">{username}</li>
                        <li style={{ padding: 0 }}><Link to="/login" class="log_btn navitem"><img src={login} alt="img" /></Link></li>
                    </div>
                </ul>
            </div>

        </nav>
    )
};

export default Layout;
