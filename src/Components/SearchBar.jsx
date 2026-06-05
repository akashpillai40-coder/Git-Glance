import React from 'react'
import { useState } from 'react'


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
    <>
    <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        placeholder='Search Github user'
        onChange={(e) => setUsername(e.target.value)}
        value={username}

         />
         <button type='submit'>Search</button>
    </form>
    </>
  )
}

export default SearchBar