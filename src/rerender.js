import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const rerender = (state, addPost) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerender;