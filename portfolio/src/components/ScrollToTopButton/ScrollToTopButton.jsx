import React, { useEffect, useState } from 'react';
import { Text, Container } from '@mantine/core';
import { IconArrowUpToArc } from '@tabler/icons-react';
import './ScrollToTopButton.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const pathLength = 2 * Math.PI * 49; // Umfang des Kreises (Radius: 49)

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressValue = Math.min((scrollTop / windowHeight) * 100, 100);
    setProgress(progressValue);
    setIsVisible(scrollTop > 50); // Button erst sichtbar, wenn über 50px gescrollt wurde
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progressOffset = (progress / 100) * pathLength;

  return (
      <div
        className={`progress-wrap ${isVisible ? 'active-progress' : ''}`}
        onClick={scrollToTop}
      >
        <svg className="progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              strokeDasharray: pathLength,
              strokeDashoffset: pathLength - progressOffset,
            }}
          />
        </svg>
        <IconArrowUpToArc className="progress-icon" />
      </div>
      
  );
}

export default ScrollToTopButton;
