import React, { useState, useEffect, useRef } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);  // Zustand, um den Button anzuzeigen oder zu verstecken
  const buttonRef = useRef(null);  // Referenz für den Button

  // Funktion zum Überwachen des Scrollens und Festlegen der Sichtbarkeit des Buttons
  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setIsVisible(true);  // Button anzeigen, wenn der Benutzer mehr als 20px gescrollt hat
    } else {
      setIsVisible(false);  // Button verstecken, wenn der Benutzer weniger als 20px gescrollt hat
    }
  };

  // Funktion, um zum Seitenanfang zu scrollen, wenn der Button geklickt wird
  const topFunction = () => {
    document.body.scrollTop = 0;  // Safari
    document.documentElement.scrollTop = 0;  // Chrome, Firefox, IE und Opera
  };

  // useEffect-Hook, um das Scrollereignis hinzuzufügen
  useEffect(() => {
    window.onscroll = scrollFunction;

    // Aufräumen des Ereignisses beim Verlassen der Komponente
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={topFunction}
        id="myBtn"
        title="Go to top"
        style={{
          display: isVisible ? 'block' : 'none',  // Button anzeigen, wenn sichtbar
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          padding: '10px',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        Top
      </button>
    </div>
  );
};

export default ScrollToTopButton;
