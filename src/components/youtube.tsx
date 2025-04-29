import React, { useState } from 'react';
import './youtube.css';

interface YouTubeCarouselProps {
  videoIds: string[];
  autoPlay?: boolean;
}

const YouTubeCarousel: React.FC<YouTubeCarouselProps> = ({ 
  videoIds, 
  autoPlay = false 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? videoIds.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === videoIds.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="youtube-carousel-container">
        <h2 className="archivo-black-regular">YouTube</h2>
      <div className="slider-container">
        <div className="left-arrow" onClick={goToPrevious}>
          ❰
        </div>
        <div className="right-arrow" onClick={goToNext}>
          ❱
        </div>
        <div className="slide">
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${videoIds[currentIndex]}${autoPlay ? '?autoplay=1' : ''}`}
              title={`YouTube video player ${currentIndex + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="dots-container">
        {videoIds.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(slideIndex)}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeCarousel;