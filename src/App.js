import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
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
}

// Placeholder components for each route
function Home() { return <div className="content">Welcome to the Commanders</div>; }
function NewStadium() { return <div className="content">New Stadium Page</div>; }
function Draft() { return <div className="content">Draft Page</div>; }
function NorthwestStadium() { return <div className="content">Northwest Stadium Page</div>; }
function SeasonTickets() { return <div className="content">Season Tickets Page</div>; }
function News() { return <div className="content">News Page</div>; }
function Schedule() { return <div className="content">Schedule Page</div>; }
function Video() { return <div className="content">Video Page</div>; }
function Roster() { return <div className="content">Roster Page</div>; }
function Tickets() { return <div className="content">Tickets Page</div>; }
function Suites() { return <div className="content">Suites Page</div>; }
function Watch() { return <div className="content">Watch Page</div>; }
function ProShop() { return <div className="content">Pro Shop Page</div>; }

export default App; 