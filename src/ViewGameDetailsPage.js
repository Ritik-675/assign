import React from 'react';

function GameDetailsPage({ game }) {
  return (
    <div>
      <h2>Game Details</h2>
      <p>Game ID: {game.id}</p>
      <p>Players: {game.players}</p>
      <p>Status: {game.status}</p>
      {game.winner && <p>Winner: {game.winner}</p>}
      {/* Add more details if needed */}
    </div>
  );
}

export default GameDetailsPage;
