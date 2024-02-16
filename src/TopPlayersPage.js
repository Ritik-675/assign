import React, { useState, useEffect } from 'react';

function TopPlayers() {
  const [topPlayers, setTopPlayers] = useState([]);

  useEffect(() => {
    fetchTopPlayers();
  }, []);

  const fetchTopPlayers = () => {
    fetch('https://lichess.org/api/player')
      .then(response => response.json())
      .then(data => {
        const topTenPlayers = data.blitz.slice(0, 10); // Considering the blitz category for top players
        setTopPlayers(topTenPlayers);
      })
      .catch(error => console.error('Error fetching top players:', error));
  };

  return (
    <div>
      <h1>Top Ten Players</h1>
      <ul>
        {topPlayers.map(player => (
          <li key={player.id}>
            {player.username} - {player.perfs.blitz.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopPlayers;
