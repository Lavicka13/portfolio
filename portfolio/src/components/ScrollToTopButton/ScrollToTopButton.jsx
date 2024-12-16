import React, { useEffect, useState } from 'react';
import './ScrollToTopButton.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(100);

  // Scroll handler
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressValue = Math.max(100 - (scrollTop / windowHeight) * 100, 0);
    setProgress(progressValue);
    setIsVisible(scrollTop > 50);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      
      <div 
        className={`progress-wrap ${isVisible ? 'active-progress' : ''}`} 
        onClick={scrollToTop}
      >
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path 
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" 
            style={{ strokeDasharray: '100, 100', strokeDashoffset: `${progress}` }}
          />
        </svg>
      </div>
    </div>
  );
}

export default ScrollToTopButton;
