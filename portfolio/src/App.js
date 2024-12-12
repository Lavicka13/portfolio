
import '@mantine/core/styles.css';
import { MantineProvider} from '@mantine/core';
import style from './App.css'
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
      <Skills />
      <Projects />
      
      
    </MantineProvider>
  );
}

export default App;
