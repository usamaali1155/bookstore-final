import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            const newCategory = action.payload;
            return [...state, newCategory];
        },
    },
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
