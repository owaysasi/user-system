import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import reducer from '../Features/usersSlice/usersSlice';

     

const store = configureStore({
    reducer:{
        usersReducer :reducer
      }
})


export default store;