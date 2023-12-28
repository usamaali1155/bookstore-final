import React from 'react';
import AddBookForm from './AddBookForm'
import BooksList from './BooksList'
function HomePage() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
            <BooksList />
            <AddBookForm />
        </div>
    );
}

export default HomePage;
