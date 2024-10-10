import React from "react";
import Book from "../../models/Book";
import book from "../../models/Book";
import BookProps from "./components/BookProps";



const List: React.FC = () => {
    const books: Book[] = [
        {
            id: 1,
            title: 'book 1',
            description: 'description for book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '/images/books/b1.jpg'
        },
        {
            id: 2,
            title: 'book 2',
            description: 'description for book 2',
            originalPrice: 60000,
            price: 55000,
            imageUrl: '/images/books/b2.jpg'
        },

        {
            id: 3,
            title: 'book 3',
            description: 'description for book 3',
            originalPrice: 70000,
            price: 66000,
            imageUrl: '/images/books/b3.jpg'
        },
        {
            id: 1,
            title: 'book 1',
            description: 'description for book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '/images/books/b1.jpg'
        },
        {
            id: 2,
            title: 'book 2',
            description: 'description for book 2',
            originalPrice: 60000,
            price: 55000,
            imageUrl: '/images/books/b2.jpg'
        },

        {
            id: 3,
            title: 'book 3',
            description: 'description for book 3',
            originalPrice: 70000,
            price: 66000,
            imageUrl: '/images/books/b3.jpg'
        },
    ];
    return (
        <div className="container">
            <div className="row mt-4">
                {
                    books.map((book) => (
                        <BookProps key={book.id} book={book} />
                    ))
                }
            </div>
        </div>
    );
}

export default List;