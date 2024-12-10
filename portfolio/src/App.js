
import React from 'react';

import '@mantine/core/styles.css';
import { MantineProvider} from '@mantine/core';

import HeaderMenu from './components/Header/header.jsx';
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import CV from './components/cv/cv.jsx';
import FooterMenu from './components/footer/footer.jsx';


function App() {
  // Beispiel-Projekte
  

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderMenu />
      <About />
      <Skills />
      <Projects />
      <CV />
      <FooterMenu />
      
    </MantineProvider>
  );
}

export default App;
