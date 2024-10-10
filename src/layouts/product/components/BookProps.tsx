import React from "react";
import Book from "../../../models/Book";

interface BookProps{
    book: Book;
}

const BookProps: React.FC<BookProps> = ({ book }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={book.imageUrl} alt={book.title} className="card-img-top"
                     style={{height: "150px", objectFit: "cover"}}/>

                <div className="card-body text-center">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <p className="card-text">
                        <span className="text-muted">
                            <del>{book.originalPrice.toLocaleString()}đ</del>
                        </span>{" "}
                        <span className="text-danger">
                            {book.price.toLocaleString()}đ
                        </span>
                    </p>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-secondary me-2">
                            <i className="fas fa-heart"></i> {/* Icon trái tim */}
                        </button>
                        <button className="btn btn-danger">
                            <i className="fas fa-shopping-cart"></i> {/* Icon giỏ hàng */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookProps;