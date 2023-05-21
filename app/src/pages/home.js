import React from 'react';
import { useLocation } from "react-router-dom";
import Layout from '../components/nav';

import '../icons/lake.jpg';

import "./home.css";

function Home({ username }) {
    const location = useLocation();
    const data = location.state;
    console.log(username);
    return (
        <div class="root">

            <Layout username={data!=null?data.username:"Login here"} />
            <div class="container">
                <h1  > Eat sleep</h1>
                <h3>
                    Code repeat
                </h3>
            </div>
            <div class="row2">
                <a class="button" href="/signup">Sign up</a>
                <a class="button2" href="/login" >Login</a>
            </div>
        </div>
    );
}

export default Home;
