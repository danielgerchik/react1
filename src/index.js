import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postsArray = [
    {number: "Post1"},
    {number: "Post2"},
    {number: "Post3"},
]
const interlocutorsArray = [
    {path: 'vanya', name: 'Ваня'},
    {path: 'masha', name: 'Маша'},
    {path: 'tanya', name: 'Таня'},
    {path: 'sasha', name: 'Саша'},
]
const dialogsArray = [
    {dialogItem: 'Привет'},
    {dialogItem: 'Как дела ?'},
    {dialogItem: 'Че делаешь ?'},
    {dialogItem: 'Всё ок'},
]

ReactDOM.render(
    <React.StrictMode>
        <App dataPosts={postsArray} dataInterlocutors={interlocutorsArray} dataDialogs={dialogsArray}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
