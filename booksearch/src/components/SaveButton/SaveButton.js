import React from "react";
import Button from "../Button/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import BookCard from "../BookCard/BookCard";
import SaveBooks from "../SavedBooks/SavedBooks";
  

  function SaveButton({ type = "default", className, children, onClick }) {
    return (
      <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
        {children}
      </button>
    );
  }
  
  export default SaveButton;

  let postToDB = (book) => {
        var dbBook = {
          title: book.title,
          authors: book.authors,
          description: book.description,
          thumbnail: book.thumbnail,
          link: book.link
        }
    }
