import { createSlice  } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'category',

    initialState: {
        category: null
    },

    reducers: {
        select: (state, action) => {
            state.category = action.payload
        }
    },
});

export const { select  } = categorySlice.actions;
export const selectCategory = (state: any) => state.category.category;
export default categorySlice.reducer;
