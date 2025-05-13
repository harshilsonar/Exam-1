import React from "react";
import { Link } from "react-router-dom";

export const BookCard = ({ id, cover_photo, book_name, author, category, release_year, chapters }) => {
  return (
    <div className="book-card" >
      <div key={id}>
        <div data-testid="book-image">
          <img src={cover_photo} alt={book_name} height={300} width={200} />
        </div>
        <div data-testid="book-name">{book_name}</div>
        <div className="book-author">{author}</div>
        <div className="book-category">{category}</div>
        <div className="book-year">{release_year}</div>
        <div className="book-chapter">{chapters}</div>
<Link to={`/edit/${id}`}><button className="edit-book">edit</button></Link>      </div>
    </div>
  );
};
