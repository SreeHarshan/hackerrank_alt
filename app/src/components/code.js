import React from 'react';
import Editor from '@monaco-editor/react';

import "./code.css";

function code() {
    return (
        <div>
            <Editor height="50vh" language="javascript" value="console.log('Hello, World!');" />
            <button class="compile_btn">Compile</button>
        </div>
    );
}

export default code;
