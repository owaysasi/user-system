import { applyMiddleware, createStore } from 'redux';
import reducer from '../Features/Slice/UsersSlice/usersSlice';
import { persistStore } from 'redux-persist';
import thunk from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default { store, persistor };