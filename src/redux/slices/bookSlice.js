import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: "item",
        title: "The Great Gastby",
        author: "John Smith",
        category: "Fiction",
    },

    {
        id: "item2",
        title: "Anna Karenina",
        author: "Leo tolsty",
        category: "Fiction",
    },

    {
        id: "item3",
        title: "The Selfish Game",
        author: "Richard",
        category: "NonFiction",
    }


];

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        removeBook: (state, action) => {
            const bookIdToRemove = action.payload;
            return state.filter(book => book.id !== bookIdToRemove);
        },
        addBook: (state, action) => {
            const newBook = action.payload;
            return [...state, newBook];
        },
        updateBook: (state, action) => {
            const updatedBook = action.payload;
            return state.map(book => (book.id === updatedBook.id ? { ...book, ...updatedBook } : book));
        },
    },
});

export const { removeBook, addBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;