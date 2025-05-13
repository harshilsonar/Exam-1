import axios from "axios";
import React, { useEffect, useState } from "react";
import { BookCard } from "./BookCard";

export const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBooks = () => {
    setLoading(true);
    axios.get("http://localhost:8080/books")
      .then((response) => setBooks(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getBooks();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  if (error) return <p className="text-center py-10 text-red-600">Error: {error}</p>;

  return (
    <div data-testid="book-list" style={{
  display: "grid",
  gridTemplateColumns: "1fr 3fr"  
}} >
  {books.map((book) => (
    <BookCard 
      key={book.id} 
      cover_photo={book.cover_photo} 
      book_name={book.book_name}
      author={book.author}
      category={book.category}
      release_year={book.release_year}
      chapter={book.chapters}
    />
  ))}
</div>
  );
};
