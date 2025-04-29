import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-columns">
        <div className="footer-col">
          <div className="footer-title">NEWS</div>
          <a href="/news">Latest News</a>
          <a href="/news">Gameday</a>
          <a href="/news">Off The Field</a>
          <a href="/news">Press Releases</a>
          <a href="/news">Community</a>
        </div>
        <div className="footer-col">
          <div className="footer-title">VIDEO</div>
          <a href="/video">Latest Videos</a>
          <a href="/video">Gameday</a>
          <a href="/video">Press Conferences</a>
          <a href="/video">Podcasts</a>
        </div>
        <div className="footer-col">
          <div className="footer-title">PHOTO</div>
          <a href="/pro-shop">Latest Photos</a>
          <a href="/pro-shop">Gameday</a>
          <a href="/pro-shop">Practice</a>
          <a href="/pro-shop">Community</a>
          <a href="/pro-shop">Fans</a>
        </div>
        <div className="footer-col">
          <div className="footer-title">TEAM</div>
          <a href="/roster">Roster</a>
          <a href="/schedule">Schedule</a>
          <a href="/schedule">Event Calendar</a>
          <a href="/schedule">Coaches</a>
          <a href="/schedule">Front Office</a>
          <a href="/schedule">Stats</a>
          <a href="/schedule">Transactions</a>
        </div>
        <div className="footer-col">
          <div className="footer-title">NORTHWEST STADIUM</div>
          <a href="/northwest-stadium">Parking & Directions</a>
          <a href="/northwest-stadium">A to Z Guide</a>
          <a href="/northwest-stadium">Tailgating Policy</a>
        </div>
        <div className="footer-col">
          <div className="footer-title">TICKETS</div>
          <a href="/tickets">Member Login</a>
          <a href="/season-tickets">Season Tickets</a>
          <a href="/tickets">Premium Tickets</a>
          <a href="/tickets">Single Game Tickets</a>
          <a href="/suites">Suites</a>
          <a href="/tickets">Member Information</a>
          <a href="/tickets">On Location Travel</a>
        </div>
        <div className="footer-col">
          <div className="footer-title">MORE</div>
          <a href="/watch">Watch</a>
          <a href="/pro-shop">Pro Shop</a>
          <a href="/new-stadium">New Stadium</a>
          <a href="/draft">Draft</a>
        </div>
      </div>  
    </div>
    <div className="footer-bottom">
      <div className="footer-bottom-links">
        <a href="#">TERMS & CONDITIONS</a>
        <a href="#">PRIVACY POLICY</a>
        <a href="#">ACCESSIBILITY</a>
        <a href="#">SITE MAP</a>
        <a href="#">AD CHOICES</a>
        <a href="#">YOUR PRIVACY CHOICES</a>
        <a href="#">COOKIE SETTINGS</a>
        <a href="#">PREFERENCE CENTER</a>
      </div>
      <div className="footer-copyright">
        Copyright © 2025 Washington Commanders. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer; 