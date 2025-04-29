import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import page components
import Home from './pages/Home';
import NewStadium from './pages/NewStadium';
import Draft from './pages/Draft';
import NorthwestStadium from './pages/NorthwestStadium';
import SeasonTickets from './pages/SeasonTickets';
import News from './pages/News';
import Schedule from './pages/Schedule';
import Video from './pages/Video';
import Roster from './pages/Roster';
import Tickets from './pages/Tickets';
import Suites from './pages/Suites';
import Watch from './pages/Watch';
import ProShop from './pages/ProShop';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">Commanders</Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/new-stadium" className="nav-link">New Stadium</Link>
              </li>
              <li className="nav-item">
                <Link to="/draft" className="nav-link">Draft</Link>
              </li>
              <li className="nav-item">
                <Link to="/northwest-stadium" className="nav-link">Northwest Stadium</Link>
              </li>
              <li className="nav-item">
                <Link to="/season-tickets" className="nav-link">Season Tickets</Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link">News</Link>
              </li>
              <li className="nav-item">
                <Link to="/schedule" className="nav-link">Schedule</Link>
              </li>
              <li className="nav-item">
                <Link to="/video" className="nav-link">Video</Link>
              </li>
              <li className="nav-item">
                <Link to="/roster" className="nav-link">Roster</Link>
              </li>
              <li className="nav-item">
                <Link to="/tickets" className="nav-link">Tickets</Link>
              </li>
              <li className="nav-item">
                <Link to="/suites" className="nav-link">Suites</Link>
              </li>
              <li className="nav-item">
                <Link to="/watch" className="nav-link">Watch</Link>
              </li>
              <li className="nav-item">
                <Link to="/pro-shop" className="nav-link">Pro Shop</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-stadium" element={<NewStadium />} />
          <Route path="/draft" element={<Draft />} />
          <Route path="/northwest-stadium" element={<NorthwestStadium />} />
          <Route path="/season-tickets" element={<SeasonTickets />} />
          <Route path="/news" element={<News />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/video" element={<Video />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/suites" element={<Suites />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/pro-shop" element={<ProShop />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 