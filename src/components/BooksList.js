import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/slices/bookSlice';

const BooksList = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    const handleRemoveBook = (id) => {
        dispatch(removeBook(id));
    };

    return (
        <div>
            <h2 style={{ textAlign: "center", fontFamily: "monospace", fontSize: "2.5rem", color: "#0056FF" }}>Books List</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {books.map((book) => (
                    <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", padding: "10px", listStyle: "none", border: "2px solid grey", borderRadius: "20px" }} key={book.id}>
                        <strong>{book.title}</strong> by <em>{book.author}</em>{' '}
                        <button
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                padding: "5px 10px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                            onClick={() => handleRemoveBook(book.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BooksList;
