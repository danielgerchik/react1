import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {changeNewTextValue} from './redux/state';
import {addPost} from "./redux/state";
import {importRerenderFunction} from "./redux/state";
// import rerender from "./rerender";

const rerender = (state, addPost, changeNewTextValue) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeNewTextValue={changeNewTextValue}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
importRerenderFunction(rerender)
rerender(state,addPost, changeNewTextValue)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
