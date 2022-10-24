import userReducer from './reducer/users';
import { combineReducers } from "redux";


import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //react-persist를 사용해 localStorage에 저장

const persistConfig = {
    key: 'root',// localStorage에 저장합니다.
    storage, // users reducer를 localstrage에 저장합니다.
}


const rootReducer = combineReducers({
    users: userReducer
})

export default persistReducer(persistConfig, rootReducer);

