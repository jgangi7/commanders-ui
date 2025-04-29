import './Home.css';
import InstagramGrid from '../components/instagramGrid';
import YouTubeCarousel from '../components/youtube';


const Home: React.FC = () => {
  const instagramPostIds = [
    'DJApDgsTOZE',
    'DJAYyfUymET/?img_index=1',
    'DI_uF95x7ds',
    'DI6oCRfxGu_',
    'DI6gdCTRMsn',
    'DIzqNNOvovB'
  ];

  const youtubeVideoIds = [
    'zhNcaAV-xsg',
    '2pFnx7yuRqQ',
    'V8wn7eJciYg',
    'zjjDzlL7rl0'
  ];

  return (
    <div className="home-container">
      {/* Instagram Section */}
      <div className="instagram-section">
        <InstagramGrid postIds={instagramPostIds} />
      </div>

      {/* YouTube Section */}
      <div className="main-section youtube-section">
        <YouTubeCarousel videoIds={youtubeVideoIds} />
      </div>
      
      {/* Newsletter Section */}
      <div className="main-section newsletter-section">
        <div className="newsletter-header">
          <span>RECEIVE TEAM NEWS RIGHT TO YOUR INBOX</span>
        </div>
        <form className="newsletter-form">
          <div className="newsletter-fields">
            <div className="newsletter-field">
              <label htmlFor="email">Email Address*</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="newsletter-field">
              <label htmlFor="zip">Zip Code*</label>
              <input type="text" id="zip" name="zip" required />
            </div>
            <div className="newsletter-field">
              <label htmlFor="country">Country*</label>
              <select id="country" name="country" required>
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="MX">Mexico</option>
                <option value="GB">United Kingdom</option>
                <option value="DE">Germany</option>
                <option value="AU">Australia</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="newsletter-terms">
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">
              I confirm that I agree to the Washington Commanders Terms &amp; Conditions, which includes a binding arbitration clause and class action waiver, and I understand that personal information will be used as described in the Washington Commanders Privacy Policy.
            </label>
          </div>
          <div className="newsletter-desc">
            Once registered, you will be able to access our preference center to control content, offers, and more that you receive from the Washington Commanders, NFL, and other member clubs.<br />
            <span className="newsletter-links flex flex-row justify-center items-center">
              <a href="https://www.commanders.com/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> | <a href="https://www.commanders.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
            </span>
          </div>
          <button type="submit" className="newsletter-submit">SUBMIT</button>
        </form>
      </div>
      {/* Follow Us Section */}
      <div className="main-section follow-us-section mx-4">
        <h2>Follow Us</h2>
        <div className="social-grid">
          <a className="social-card" href="https://www.facebook.com/commanders" target="_blank" rel="noopener noreferrer">
            <span className="social-icon">{/* Facebook SVG */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#fff"/><path d="M17.5 14H15.5V21H12.5V14H11V11.5H12.5V10.25C12.5 8.73 13.23 7.5 15.25 7.5H17.5V10H16.25C15.84 10 15.5 10.09 15.5 10.5V11.5H17.5L17.5 14Z" fill="#000"/></svg>
            </span>
            <div className="social-info">
              <div className="social-title">FACEBOOK</div>
              <div className="social-desc">Washington Commanders</div>
            </div>
          </a>
          <a className="social-card" href="https://www.tiktok.com/@commanders" target="_blank" rel="noopener noreferrer">
            <span className="social-icon">{/* TikTok SVG */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#fff"/><path d="M18 10.5V16C18 17.38 16.88 18.5 15.5 18.5C14.12 18.5 13 17.38 13 16C13 14.62 14.12 13.5 15.5 13.5C15.78 13.5 16.05 13.54 16.3 13.62V12.1C16.05 12.04 15.78 12 15.5 12C13.57 12 12 13.57 12 15.5C12 17.43 13.57 19 15.5 19C17.43 19 19 17.43 19 15.5V10.5H18Z" fill="#000"/></svg>
            </span>
            <div className="social-info">
              <div className="social-title">TIKTOK</div>
              <div className="social-desc">Washington Commanders</div>
            </div>
          </a>
          <a className="social-card" href="https://twitter.com/commanders" target="_blank" rel="noopener noreferrer">
            <span className="social-icon">{/* X (Twitter) SVG */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#fff"/><path d="M10 10L18 18M18 10L10 18" stroke="#000" strokeWidth="2"/></svg>
            </span>
            <div className="social-info">
              <div className="social-title">X</div>
              <div className="social-desc">Washington Commanders</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home; 