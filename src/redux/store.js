import {applyMiddleware, legacy_createStore} from 'redux';
import {thunk} from 'redux-thunk';
import {userReducer} from './reducer/userReducer';
import {persistReducer, persistStore} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage
};

const pReducer = persistReducer(persistConfig, userReducer);

const store = legacy_createStore(pReducer, applyMiddleware(thunk));
export const persist = persistStore(store);
export default store;

