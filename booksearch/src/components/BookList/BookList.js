import React from 'react'
import BookCard from '../BookCard/BookCard'
import './BookList.css'

const BookList = (props) => {
  const Component = props.component;
  return (
  <div className="list"> 
  { 
  
 props.books.map(book => <Component key={book._id} info={book} />)
  }
  </div>
  )}

export default BookList;