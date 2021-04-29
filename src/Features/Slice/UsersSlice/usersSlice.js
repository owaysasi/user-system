import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import _ from 'lodash';

export const initialState = { // The initial value of the state
  users:[],
  posts:["Hello"," darling"]
};

const usersSlice = createSlice({ // The Slice of users 
  name: 'users',
  initialState,
  reducers: 
    {
    fetchUsers(state, action) {
      console.log(action.payload)
      state.users.push(...action.payload)
    },
    addUser(state, action) {
      console.log(action.payload)
      state.users.push(action.payload);
    },
    deleteUser(state, action) {
      console.log(action.payload)
      return {...state,
        users:[
          ...state.users.filter(user => user.id !== action.payload)
        ]
      }
    },
  },
});
    
// export const getMemoMath = _.memoize(fetchDataConsole); // memoizing 

export const { actions, reducer } = usersSlice;

const persistConfig = {
  key:'root',
  storage
}

export default persistReducer(persistConfig, reducer);

export const { fetchUsers, addUser, deleteUser } = actions;
