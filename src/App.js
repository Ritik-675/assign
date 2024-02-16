import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TopPlayersPage from './TopPlayersPage';
import SearchGamesPage from './SearchGamesPage';
import ViewGameDetailsPage from './ViewGameDetailsPage';
import TopGamesPage from './TopGamesPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-players" element={<TopPlayersPage />} />
          <Route path="/search-games" element={<SearchGamesPage />} />
          <Route path="/view-game-details" element={<ViewGameDetailsPage />} />
          <Route path="/top-games" element={<TopGamesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import HomePage from './HomePage';
// import TopPlayersPage from './TopPlayersPage';
// import SearchGamesPage from './SearchGamesPage';
// import ViewGameDetailsPage from './ViewGameDetailsPage';
// import TopGamesPage from './TopGamesPage';

// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



// function App() {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/top-players" component={TopPlayersPage} />
//           <Route path="/search-games" component={SearchGamesPage} />
//           <Route path="/view-game-details" component={ViewGameDetailsPage} />
//           <Route path="/top-games" component={TopGamesPage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
