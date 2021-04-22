import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import reducer from '../Features/usersSlice/usersSlice';
// import { combineReducers } from 'redux';
import store from './Store';
// import rootReducer from "./reducers";
// import { createStore, applyMiddleware, compose } from "redux";
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from "redux-thunk";
// import promiseMiddleware from "redux-promise";
// import { composeWithDevTools } from "redux-devtools-extension";

// let store ; // GLOBALIZED STATE

// const createStoreWithMiddleware = applyMiddleware(
//   promiseMiddleware,
//   ReduxThunk
// )(createStore);

// store = createStoreWithMiddleware(
//   rootReducer,
//   composeWithDevTools()
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default store; 