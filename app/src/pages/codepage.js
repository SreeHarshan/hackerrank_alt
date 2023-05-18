import React from 'react';

import Code from '../components/code';
import Layout from '../components/nav';
import "./codepage.css";

function CodePage() {
    return (
        <div class="root">
            <Layout/>
            <div class="row">
                <div class="column"><p class="qs">This the question. You have to type the code on the right side and press the compile button</p></div>
                <div class="column" >
                   <div class="code"> <Code /></div>
                    </div>
            </div>
        </div>
    );
}

export default CodePage;