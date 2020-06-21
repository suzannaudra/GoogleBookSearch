import React, { Component } from 'react';
import SearchArea from '../searcharea/searcharea';
import axios from 'axios'
import BookList from '../BookList/BookList';
import BookCard from '../BookCard/BookCard';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


class Books extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchField: ''
    }
  }

//Request for API
searchBook = (e) => {
  e.preventDefault()
    const url = "https://www.googleapis.com/books/v1/volumes?q="
    axios.get(url + this.state.searchField)
      .then(res => {
        this.setState({ books:[...res.data.items]})
      })
        //console.log(res.data)

  };


  //Search Functionallity
  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value })
  }

  render() {
        return (<div>
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
        <BookList books={this.state.books} component={BookCard} />
      </div> )
        }
      }
      
      const bookSchema = new Schema({
        title: { type: String, required: true },
        authors: [{ type: String, required: true }],
        synopsis: String,
        date: { type: Date, default: Date.now },
        thumbnail: { type: String },
        link: String
      });
      
      const Book = mongoose.model("Book", bookSchema);

export default Books;