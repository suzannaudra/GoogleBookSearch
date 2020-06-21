import React from 'react'
import Button from '../Button/Button'
import axios from 'axios'


const BookCard = (props) => {
  console.log(props)
  //fn
  let postToDB = (book) => {
    var dbBook = {
      title: book.title,
      authors: book.authors,
      description: book.description,
      thumbnail: book.thumbnail,
      
    }
    console.log(dbBook);
    axios.post('/saved',dbBook).then(function(results){
      console.log(results)
    })
    //TBD: Make post request to create saved book
}
  return (
  <div className="card-container">
<img src={props.info.volumeInfo.imageLinks.thumbnail} alt=""/>
<div className="desc">
  <h2>{props.info.volumeInfo.title}</h2>
  {props.info.volumeInfo.authors && <h3>{props.info.volumeInfo.authors.join(', ')}</h3>}
  <p>{props.info.volumeInfo.publishedDate}</p>
  <p>{props.info.volumeInfo.description.slice(0, 197) + '...'}</p>
  <Button onClick={() => postToDB({title:props.info.volumeInfo.title, authors: props.info.volumeInfo.authors, description:  props.info.volumeInfo.description, thumbnail: props.info.volumeInfo.imageLinks.thumbnail})}>
    Save Book
  </Button>
 
</div>
    </div>
  
  )}

  export default BookCard