import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/bookSlice';
import categoryReducer from './slices/categorySlice';

const store = configureStore({
    reducer: {
        books: bookReducer,
        categories: categoryReducer,
    },
});

export default store;
