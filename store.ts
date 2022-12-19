import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}


const reducer = combineReducers({
    category: categoryReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;