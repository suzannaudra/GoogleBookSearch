import React from 'react'
import App from '../../App'
import SavedBooks from '../SavedBooks/SavedBooks';

const Header = () => {
  return (
  <header>
    <h1> Book Search</h1>

  <button onClick={() => window.location.pathname = '/saved'}  className='saveButton'>Saved Books Page</button>
  <SavedBooks></SavedBooks>
  </header>
  )
}

export default Header;