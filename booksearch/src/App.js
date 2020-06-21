import React, { Component } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Books from "./components/books/books"
import SavedBooks from "./components/SavedBooks/SavedBooks"



class App extends Component {
  render() {
    return (
        <div className="App-header">
          <Header />
          {window.location.pathname === '/' && <Books />}
          {window.location.pathname === '/saved' && <SavedBooks />}
        </div>
    )} } 
  

export default App;
