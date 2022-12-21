import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import tagReducer from "./slices/tagSlice";

const reducer = combineReducers({
    category: categoryReducer,
    tag: tagReducer
});

export const store = configureStore({
    reducer: reducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;