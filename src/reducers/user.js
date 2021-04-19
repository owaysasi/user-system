// import reducer from ''
import {createReducer } from '@reduxjs/toolkit';

const initialState = {
    users:[
    ]
}

// function dataReducer (state = initialState, {type,payload}){
//     switch(type){
//         case "ADD": 
//             return {
//                 ...state,
//                 users: [...state.users, payload]
//             }

//         case "DELETE":
//             return {
//                 ...state,
//                 users:[
//                     ...state.users.filter(user => user.id !== payload)
//                 ]
                
//             };

//         case "GET":
//             return {
//                 ...state,
//                 users: [...state.users, ...payload]
//             }

//         default:
//             return state;
//     }
// }

// const dataReducer = createReducer([], {
//     get: (state, { payload }) => {return {...state,
//                         users: [...state.users, ...payload]}}
//   });


export default dataReducer;