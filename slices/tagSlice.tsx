"use client"

import { createSlice } from "@reduxjs/toolkit"

export const tagSlice = createSlice({
    name: 'tag',
    initialState: {
        tag: null
    },
    reducers: {
        chooseTag: (state, action) => {
            state.tag = action.payload
        }
    },
});

export const { chooseTag } = tagSlice.actions;

// @ts-ignore
export const selectTag = (state) => state.tag.tag;

export default tagSlice.reducer;