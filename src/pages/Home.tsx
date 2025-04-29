import './Home.css';
import InstagramGrid from '../components/instagramGrid';
import YouTubeCarousel from '../components/youtube';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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

  const podcastImages = [
    { src: '/images/podcast1.png', alt: "Ticket to the Draft '25" },
    { src: '/images/podcast2.png', alt: 'Command Center Podcast' },
    { src: '/images/podcast3.png', alt: 'The Gameplan' },
    { src: '/images/podcast4.png', alt: "The Player's Club" },
    { src: '/images/podcast5.png', alt: 'Get Loud' },
    { src: '/images/podcast6.png', alt: 'Hail Tales' },
    { src: '/images/podcast7.png', alt: 'Next Man Up' },
    { src: '/images/podcast8.png', alt: 'The Beat Down' },
    { src: '/images/podcast9.png', alt: 'The Booth Review' },
    { src: '/images/podcast10.png', alt: 'Press Pass' },
  ];

  useEffect(() => {
    const setPlaybackRate = () => {
      const iframe = document.getElementById('welcome-video') as HTMLIFrameElement;
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: 'setPlaybackRate',
            args: [1.5],
          }),
          '*'
        );
      }
    };
    // Try to set playback rate after a short delay
    const interval = setInterval(setPlaybackRate, 1000);
    setTimeout(() => clearInterval(interval), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Welcome Section */}
      <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
        <iframe
          id="welcome-video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/yIQRWCEbtQ0?autoplay=1&mute=1&loop=1&playlist=yIQRWCEbtQ0&controls=0&showinfo=0&modestbranding=1&rel=0"
          title="Welcome Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 1 }}
        ></iframe>
        <div
          className="archivo-black-regular"
          style={{
            position: 'absolute',
            bottom: '3vw',
            right: '4vw',
            zIndex: 2,
            color: '#FFB612',
            fontSize: '4rem',
            textShadow: '2px 2px 8px #000, 4px 4px 0 #5A1414',
            letterSpacing: '0.1em',
            pointerEvents: 'none',
            userSelect: 'none',
            fontWeight: 'bold',
          }}
        >
          <div>
            RAISE HAIL
          </div>
          <div>
            DEFEND THE DISTRICT
          </div>
        </div>
      </div>

      {/* YouTube Section */}
      <div className="main-section youtube-section">
        <YouTubeCarousel videoIds={youtubeVideoIds} />
      </div>

      {/* Podcast Section */}
      <div className="main-section podcast-section">
        <div className="section-content">
            <h2 className="archivo-black-regular" >Commanders Podcast Network</h2>
            <Slider
              dots={true}
              infinite={false}
              speed={500}
              slidesToShow={5}
              slidesToScroll={1}
              arrows={true}
              responsive={[
                { breakpoint: 1200, settings: { slidesToShow: 4 } },
                { breakpoint: 900, settings: { slidesToShow: 3 } },
                { breakpoint: 600, settings: { slidesToShow: 2 } },
                { breakpoint: 400, settings: { slidesToShow: 1 } },
              ]}
            >
              {podcastImages.map((img, idx) => (
                <div key={idx} style={{ padding: '0 10px' }}>
                  <img src={img.src} alt={img.alt} className="podcast-img" />
                </div>
              ))}
            </Slider>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="main-section instagram-section">
        <div className="section-content">
          <InstagramGrid postIds={instagramPostIds} />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="main-section newsletter-section">
        <div className="section-content">
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
      </div>

      {/* Follow Us Section */}
      <div className="main-section follow-us-section mx-4">
        <div className="section-content">
          <h2 className="archivo-black-regular">Follow Us</h2>
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
    </div>
  );
};

export default Home; 