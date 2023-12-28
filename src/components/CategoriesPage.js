import React from 'react';

function CategoriesPage() {
    const categories = [
        { id: 1, name: 'Fiction' },
        { id: 2, name: 'Science Fiction' },
        { id: 3, name: 'Mystery' },
        { id: 4, name: 'Islamic' },
        { id: 5, name: 'Fantasy' },
    ];

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>
            <h2 style={{ textAlign: "center", fontFamily: "monospace", fontSize: "2.5rem", color: "#0056FF" }}>Categories Page</h2>
            <ol>
                {categories.map(category => (
                    <li style={{ padding: "10px", fontSize: "1.5rem", fontWeight: "bold" }} key={category.id}>{category.name}</li>
                ))}
            </ol>
        </div>
    );
}

export default CategoriesPage;
