import React, { useState } from 'react';
import SearchBar from './SearchBar';

function SearchGamesPage() {
  console.log("Start");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = (username) => {
    // Fetch all player data
    console.log("Clicked on search");
    fetch('https://lichess.org/api/player')
      .then(response => {
        console.log("Fetched data");
        if (!response.ok) {
          throw new Error('Failed to fetch player data');
        }
        return response.json();
      })
      .then(data => {
        console.log("Received data:", data);
        // Search for the specified username within the data
        let foundUser = null;
        Object.keys(data).forEach(key => {
          const user = data[key].find(user => user.username.toLowerCase() === username.toLowerCase());
          if (user) {
            foundUser = user;
          }
        });
        console.log("Found user:", foundUser);
        if (foundUser) {
          setUserData(foundUser);
          setError(null);
        } else {
          setError('User not found');
          setUserData(null);
        }
      })
      .catch(error => {
        console.error('Error fetching player data:', error);
        setError('Failed to fetch player data. Please try again later.');
        setUserData(null);
      });
  };

  return (
    <div>
      <h2>Search Games by Username</h2>
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h3>Player Details:</h3>
          <p>Username: {userData.username}</p>
          <p>Title: {userData.title || 'N/A'}</p>
          {/* Display other player details as needed */}
        </div>
      )}
    </div>
  );
}

export default SearchGamesPage;
