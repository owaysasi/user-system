import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, createStore } from 'redux';
import reducer from '../Features/usersSlice/usersSlice';
import thunk from "redux-thunk";

// const myLogger = store => next => action => {
//   console.log("Middleware just ran")
//   return next(action);
// }

// const store = createStore(reducer, applyMiddleware(thunk))

const store = configureStore({
    reducer:{
        usersReducer :reducer
      }
}, applyMiddleware(thunk))


export default store;