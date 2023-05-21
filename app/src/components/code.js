import React from 'react';
import Editor from '@monaco-editor/react';

import "./code.css";

function code() {
    return (
        <div>
            <Editor theme="vs-dark" height="70vh" language="javascript" value="console.log('Hello, World!');" />
            <button class="compile_btn">Compile</button>
        </div>
    );
}

export default code;
