import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, updateBook } from '../redux/slices/bookSlice';

const BooksList = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const [updatedBook, setUpdatedBook] = useState({ id: '', title: '', author: '', category: '' });

    const handleRemoveBook = (id) => {
        dispatch(removeBook(id));
    };

    const handleUpdateBook = () => {
        dispatch(updateBook(updatedBook));
        setModalOpen(false);
        setUpdatedBook({ id: '', title: '', author: '', category: '' });
    };

    const handleOpenModal = (book) => {
        setUpdatedBook(book);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setUpdatedBook({ id: '', title: '', author: '', category: '' });
    };

    const handleInputChange = (e) => {
        setUpdatedBook({
            ...updatedBook,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h2 style={{ textAlign: "center", fontFamily: "monospace", fontSize: "2.5rem", color: "#0056FF" }}>Books List</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {books.map((book) => (
                    <li key={book.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", padding: "10px", listStyle: "none", border: "2px solid grey", borderRadius: "20px" }}>
                        <div>
                            <strong>{book.title}</strong> by <em>{book.author}</em> - Category: {book.category}
                        </div>
                        <div>
                            <button
                                style={{
                                    backgroundColor: "red",
                                    color: "white",
                                    padding: "5px 10px",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    marginRight: "10px",
                                }}
                                onClick={() => handleRemoveBook(book.id)}
                            >
                                Remove
                            </button>
                            <button
                                style={{
                                    backgroundColor: "green",
                                    color: "white",
                                    padding: "5px 10px",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleOpenModal(book)}
                            >
                                Update
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {modalOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '10px', display: "flex", flexDirection: "column", gap: "20px", minWidth: "400px" }}>
                        <h2>Update Book</h2>
                        <label>Title:</label>
                        <input type="text" name="title" value={updatedBook.title} onChange={handleInputChange} />
                        <label>Author:</label>
                        <input type="text" name="author" value={updatedBook.author} onChange={handleInputChange} />
                        <label>Category:</label>
                        <input type="text" name="category" value={updatedBook.category} onChange={handleInputChange} />
                        <button style={{ background: 'green', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }} onClick={handleUpdateBook}>Update</button>
                        <button style={{ background: 'red', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }} onClick={handleCloseModal}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BooksList;
