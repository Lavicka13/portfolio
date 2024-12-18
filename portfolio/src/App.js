import React, { useEffect } from 'react';
import '@mantine/core/styles.css';
import './App.css';
import { Container, MantineProvider, Text } from '@mantine/core';
import HeaderMenu from './components/Header/header.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import SocialBar from './components/SocialBar/socialbar.jsx';
import GetInTouch from './components/Contact/GetInTouchSimple.tsx';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.jsx';
import { Notifications } from '@mantine/notifications';

// Importiere AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS-Stile

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Dauer der Animationen
      once: false, 
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  

  return (
    <div class="glass-effect">
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications />
      <HeaderMenu />
      <SocialBar />
      <About />
      <Skills />
      <Projects />
      <GetInTouch />
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <Text c="dimmed">Created with React and JavaScript</Text>
        <Text c="dimmed">&copy; 2024 Lukas Lavicka</Text>
        <ScrollToTopButton />
      </Container>
    </MantineProvider>
    </div>
  );
}

export default App;
