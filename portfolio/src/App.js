
import React from 'react';



import '@mantine/core/styles.css';
import { MantineProvider} from '@mantine/core';

import HeaderMenu from './components/header.jsx';
import About from './components/About.jsx'
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import CV from './components/cv.jsx';
import FooterMenu from './components/footer.jsx';


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
