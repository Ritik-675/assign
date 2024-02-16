import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={handleChange} placeholder="Enter username" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
