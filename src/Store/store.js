import { applyMiddleware, createStore } from 'redux';
import reducer from '../Features/Slice/UsersSlice/usersSlice';
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk))

export default store;