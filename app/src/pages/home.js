import React from 'react';
import Layout from '../components/nav';

import '../icons/lake.jpg';

import "./home.css";

function Home() {

    return (
        <div >

            <Layout />
            <div class="container">
                <h1  > Eat sleep</h1>
                <h3>
                    Code repeat
                </h3>
            </div>
            <div class="row2">
                <button class="button">Sign up</button>
                <button class="button2">Login</button>
            </div>
        </div>
    );
}

export default Home;
