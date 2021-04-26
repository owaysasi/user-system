import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const URL = 'https://dummyapi.io/data/api/user';
const APP_ID = '605dcfd123d78a50c5067229';

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

const { actions, reducer } = usersSlice;

export const { fetchUsers, addUser, deleteUser } = actions;

export default reducer;