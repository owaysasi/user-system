import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const URL = 'https://dummyapi.io/data/api/user';
const APP_ID = '605dcfd123d78a50c5067229';
// const USER_ID = '1Lkk06cOUCkiAsUXFLMN';

// The initial state of the HackerNews component
export const initialState = []

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      console.log(action.payload)
      state.push(action.payload);
    },
    deleteUser(state, action) {
      console.log(action.payload)
      return state.filter(user => user.id !== action.payload)
    },
  },
});

export const fetchUsers = (setLoading) => async dispatch => {
  try{
    await axios.get(`${URL}`, { headers: { 'app-id': APP_ID} })
    .then((res) => {
        res.data.data.map((row) => dispatch(addUser({
            firstName : row.firstName,
            email : row.email,
            lastName : row.lastName,
            id : row.id,
            action : row.id,
            key: row.id
        })))
    })
    .finally(() => setLoading(false))
  }
  catch(e){
    return console.error(e.message);
  }
}

const { actions, reducer } = usersSlice;

export const { addUser, deleteUser } = actions;

export default reducer;