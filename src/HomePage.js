import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to ReachHub!</h1>
      <ul>
        <li>
          <Link to="/top-players">Top Players</Link>
        </li>
        <li>
          <Link to="/search-games">Search Games</Link>
        </li>
        <li>
          <Link to="/view-game-details">View Game Details</Link>
        </li>
        <li>
          <Link to="/top-games">Top Games</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
