import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export const EditBook = () => {
  const { id } = useParams(); // Get id from URL
  const [book, setBook] = useState({
    book_name: "",
    author: "",
    chapters: "",
   
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBook = () => {
    setLoading(true);
    axios.get(`http://localhost:8080/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    setLoading(true);
    axios.put(`http://localhost:8080/books/${id}`, book)
      .then(() => {
        alert("Book updated successfully!");
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getBook();
  }, [id]);

  return (
    <DIV>
      <h1 data-testid="book-id">Edit Book ID: {id}</h1>
      <input 
        type="text" 
        placeholder="Name" 
        data-testid="book-name" 
        name="book_name"
        value={book.book_name}
        onChange={handleChange}
      />
      <input 
        type="text" 
        placeholder="Author" 
        data-testid="book-author" 
        name="author"
        value={book.author}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder=" Chapters"
        data-testid="book-chapter"
        name="chapters"
        value={book.chapters}
        onChange={handleChange}
      />
     
      <button 
        data-testid="update-book"
        onClick={handleUpdate}
        disabled={loading}
      >
        {loading ? "Updating..." : "Update"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;