import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';


const rerender = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            {/*state={state} addPost={addPost} changeNewTextValue={changeNewTextValue}*/}
            <App store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
store.subscribe(()=> {
    rerender(store)
})
rerender(store)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
