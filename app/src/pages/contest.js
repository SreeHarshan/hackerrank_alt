import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Layout from '../components/nav';

import "./contest.css";

function Contest() {

    const location = useLocation();
    var data = location.state;
    const navigate = useNavigate();

    //temp
    const Owner = "Sree Harshan";
    const ContestName = "Contest Name";

    const enroll = () => { };
    return (
        <div class="root">
            <Layout username={(data != null && data.login) ? data.username : "Login here"} />
            <div class="container3">
                <b class="conname">{ContestName}</b>
                <br />
                <b class="conowner">conducted by {Owner}</b>
                <br />
                <button class="enroll-btn"onClick={enroll}>Enroll</button>
            </div>
        </div>
    );
}

export default Contest;
