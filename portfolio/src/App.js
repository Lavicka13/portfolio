
import '@mantine/core/styles.css';
import { MantineProvider} from '@mantine/core';

import HeaderMenu from './components/Header/header.jsx';
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import SocialBar from './components/SocialBar/socialbar.jsx';


function App() {
  

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderMenu />
      <SocialBar />
      <About />
      <Skills className="light-background"/>
      <Projects className= "light-background"/>
      
      
    </MantineProvider>
  );
}

export default App;
