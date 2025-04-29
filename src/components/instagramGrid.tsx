import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './instagramGrid.css';

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

interface InstagramGridProps {
  postIds: string[];
}

const InstagramGrid: React.FC<InstagramGridProps> = ({ postIds }) => {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Process embeds when script is loaded
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    // Cleanup function
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Re-process Instagram embeds when slides change
  const handleAfterChange = () => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="instagram-grid-container">
      <h2 className="archivo-black-regular">Instagram</h2>
      <Slider ref={sliderRef} {...sliderSettings}>
        {postIds.map((postId, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{ padding: '0 12px', minHeight: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={`https://www.instagram.com/p/${postId}/`}
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '100%',
                width: '100%'
              }}
            >
              <div style={{ padding: '16px' }}>
                {/* Loading placeholder */}
                <p style={{ margin: '8px 0', textAlign: 'center' }}>
                  Loading Instagram Post...
                </p>
              </div>
            </blockquote>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstagramGrid;