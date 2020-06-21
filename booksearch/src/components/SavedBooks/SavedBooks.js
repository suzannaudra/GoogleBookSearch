import React, { Component } from 'react'
import axios from 'axios'
//import './SavedBooks.css'
import BookList from '../BookList';
import SavedBookCard from '../SavedBookCard/SavedBookCard';

class SavedBooks extends Component {
  state = {
    books: "",
    savedBooks: []
  };
componentDidMount(){
  axios.get('/saved')
    .then(results => {
      this.setState({savedBooks: results.data.Books})
    })
    .catch(err => {console.log(err)})
  }

  render(){
    console.log(this.state.savedBooks)
    return ( <BookList books={this.state.savedBooks} component={SavedBookCard} />
    
  
)}
  }
export default SavedBooks;