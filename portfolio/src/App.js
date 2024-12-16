
import '@mantine/core/styles.css';
import { Container, MantineProvider, Text} from '@mantine/core';
import style from './App.css'
import HeaderMenu from './components/Header/header.jsx';
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import SocialBar from './components/SocialBar/socialbar.jsx';
import GetInTouch from './components/Contact/GetInTouchSimple.tsx';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.jsx';
import { Notifications } from '@mantine/notifications';




function App() {

  return (
    
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
            justifyContent: 'center',  // Horizontale Zentrierung
            flexDirection:'column',
            alignItems: 'center',      
            marginBottom: '20px',
            
            }}>
        <Text c="dimmed">Created with React and JavaScript</Text>
        <Text c="dimmed">&copy; 2024 Lukas Lavicka</Text>
        <ScrollToTopButton />
      </Container>
    </MantineProvider>
  );
}

export default App;
