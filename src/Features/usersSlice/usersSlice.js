import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const URL = 'https://dummyapi.io/data/api/user';
const APP_ID = '605dcfd123d78a50c5067229';
// const USER_ID = '1Lkk06cOUCkiAsUXFLMN';

// The initial state of the component
export const initialState = {
  users:[],
  posts:["Hello"," darling"]
};

const usersSlice = createSlice({
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


export const doubleDigit = (x) => {
  if(x>0 && x<=9){
    return x * x ;
  }
  return 0;
}


export const getUsers = (setLoading,dispatch)  => {
  console.log("fetch....")
  try{
    let data =[];
    axios.get(`${URL}`, { headers: { 'app-id': APP_ID} })
    .then((res) => {
      // console.log("res",res)
      res.data.data.map((row) => data.push({
            firstName : row.firstName,
            email : row.email,
            lastName : row.lastName,
            id : row.id,
            action : row.id,
            key: row.id
          }))
        dispatch(fetchUsers(data))
    })
    .finally(() =>{ setLoading(false);
      // console.log("prt")
    })
    }
    catch(e){
      return console.error(e.message);
    }
  }

  export const fetchDataThunk = (setLoading) => async (dispatch) => {
    console.log("Thunk")
    let data= [];
      await axios.get(`${URL}`, { headers: { 'app-id': APP_ID} })
      .then((res) => {res.data.data.map((row) => data.push({
        firstName : row.firstName,
        email : row.email,
        lastName : row.lastName,
        id : row.id,
        action : row.id,
        key: row.id
      }))
          dispatch(fetchUsers(data))
      })
      setLoading(false)
  }
  
// export const getMemoMath = _.memoize(fetchDataConsole); // memoizing 

const { actions, reducer } = usersSlice;

export const { fetchUsers, addUser, deleteUser } = actions;

export default reducer;