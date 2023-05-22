import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import "./contest.css";

function Contest() {

    const location = useLocation();
    var data = location.state;
    const navigate = useNavigate();

    //temp
    const Owner = data.ContestInfo.Owner;
    const ContestName = data.ContestInfo.ContestName;
    const ContestDesc = data.ContestInfo.ContestDesc;

    const enroll = () => { };
    const back = () => {
        navigate('/contest',{state:data});
    };

    return (
        <div class="root">
            <div class="container-contest">
            <button class="close-btn" onClick={back}>&#10006;</button>
                <b class="conname">{ContestName}</b>
                <br />
                <b class="conowner">conducted by {Owner}</b>
                <br />
                <b class="condesc">{ContestDesc}</b>
                <br />
                <button class="enroll-btn"onClick={enroll}>Join</button>
            </div>
        </div>
    );
}

export default Contest;
