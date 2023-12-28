import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/slices/bookSlice';

const AddBookForm = () => {
    const dispatch = useDispatch();
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        category: '',
    });

    const handleInputChange = (e) => {
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddBook = () => {
        dispatch(addBook({ ...newBook, id: String(Date.now()) }));
        setNewBook({
            title: '',
            author: '',
            category: '',
        });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "400px", margin: "auto" }}>
            <h2 style={{ textAlign: "center", fontFamily: "monospace", fontSize: "2.5rem", color: "#0056FF" }}>Add a New Book</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <label style={{ fontSize: "1.2rem", color: "#333" }}>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                        style={{ padding: "10px", borderRadius: "5px", fontSize: "1rem" }}
                        placeholder="Enter book title"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <label style={{ fontSize: "1.2rem", color: "#333" }}>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                        style={{ padding: "10px", borderRadius: "5px", fontSize: "1rem" }}
                        placeholder="Enter author name"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <label style={{ fontSize: "1.2rem", color: "#333" }}>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={newBook.category}
                        onChange={handleInputChange}
                        style={{ padding: "10px", borderRadius: "5px", fontSize: "1rem" }}
                        placeholder="Enter book category"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleAddBook}
                    style={{
                        backgroundColor: "#0056FF",
                        color: "white",
                        padding: "10px",
                        borderRadius: "5px",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                    }}
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBookForm;
