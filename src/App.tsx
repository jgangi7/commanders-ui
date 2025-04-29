import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

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

const navLinks = [
  { to: '/new-stadium', label: 'New Stadium' },
  { to: '/draft', label: 'Draft' },
  { to: '/northwest-stadium', label: 'Northwest Stadium' },
  { to: '/season-tickets', label: 'Season Tickets' },
  { to: '/news', label: 'News' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/video', label: 'Video' },
  { to: '/roster', label: 'Roster' },
  { to: '/tickets', label: 'Tickets' },
  { to: '/suites', label: 'Suites' },
  { to: '/watch', label: 'Watch' },
  { to: '/pro-shop', label: 'Pro Shop' },
];

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo" onClick={handleMenuClose}>
              <img
                src="/images/logo.png"
                alt="Washington Commanders Logo"
                className="logo-image"
              />
            </Link>
            <ul className="nav-menu">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.to}>
                  <Link to={link.to} className="nav-link" onClick={handleMenuClose}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={handleMenuToggle}
              aria-label="Open navigation menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          {/* Mobile menu overlay */}
          {menuOpen && (
            <div className="mobile-menu-overlay" onClick={handleMenuClose}>
              <button className="mobile-menu-close" onClick={handleMenuClose} aria-label="Close menu">
                &times;
              </button>
              <ul className="mobile-nav-menu" onClick={e => e.stopPropagation()}>
                {navLinks.map((link) => (
                  <li className="mobile-nav-item" key={link.to}>
                    <Link to={link.to} className="mobile-nav-link" onClick={handleMenuClose}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
        <Footer />
      </div>
    </Router>
  );
};

export default App; 