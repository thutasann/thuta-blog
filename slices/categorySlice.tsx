"use client"

import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: 'category',

    initialState: {
        category: null
    },

    reducers: {
        chooseCategory: (state, action) => {
            state.category = action.payload;
        },
    },
});


export const { chooseCategory  } = categorySlice.actions;

// @ts-ignore
export const selectCate = (state) => state.category.category;

export default categorySlice.reducer;

