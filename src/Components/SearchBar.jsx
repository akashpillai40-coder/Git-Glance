
import React, { useState } from 'react'
import './SearchBar.css'


const SearchBar = ({ userSearch }) => {
    const[username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!username.trim()) return;
        //run search on app.jsx
        userSearch(username);
        setUsername('');
       
    };
  return (
    <div className='search-wrapper'>
    <form onSubmit={handleSubmit}>
        <input 
         className="search-input"
        type='text' 
        placeholder='Search Github user'
        onChange={(e) => setUsername(e.target.value)}
        value={username}

         />
        
         <button className="search-btn" type='submit'>Search</button>
    </form>
    </div>
  )
}

export default SearchBar