import { Grid, Image, Container, Text, Title } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import Flickity from 'flickity'; // Import von Flickity
import 'flickity/css/flickity.css'; // Import des Flickity CSS
import './projects.css';

const projects = [
  {
    title: 'Random Quote Generator',
    description: 'I learned how to fetch data from an API and display it dynamically, while improving my understanding of JavaScript promises and fetch calls.',
    icon: process.env.PUBLIC_URL + '/assets/projects/quotegenerator.png',
    link: 'https://github.com/Lavicka13/QuoteGenerator',
  },
  {
    title: 'Music Player',
    description: 'This project taught me how to set up a mock API, manage state effectively, and create an interactive UI with React for audio playback functionality.',
    icon: process.env.PUBLIC_URL + '/assets/projects/musicplayer.png',
    link: 'https://github.com/Lavicka13/musicplayer',
  },
  {
    title: 'To Do List',
    description: 'My first project using React and the Mantine library, where I learned component structuring, state management, and modern UI design principles.',
    icon: process.env.PUBLIC_URL + '/assets/projects/todolist.png',
    link: 'https://github.com/Lavicka13/todo-list-app',
  },
  {
    title: 'Login Form',
    description: 'A deeper dive into React and Mantine library to create a user-friendly and responsive login form with validation and state handling.',
    icon: process.env.PUBLIC_URL + '/assets/projects/loginform.png',
    link: 'https://github.com/Lavicka13/login_form2',
  },
];

function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const tiltRefs = useRef([]);
  const flickityRef = useRef(null); // Referenz für Flickity

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1366);
    handleResize();
    window.addEventListener('resize', handleResize);
  
    if (!isMobile) {
      tiltRefs.current.forEach((ref) => {
        if (ref && !ref.vanillaTilt) {
          VanillaTilt.init(ref, {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 1,
          });
        }
      });
    }
  
    // Initialisierung von Flickity
    if (flickityRef.current && !flickityRef.current.flickity) {
      new Flickity(flickityRef.current, {
        cellAlign: 'center',    // Karten sollen zentriert sein
        contain: true,
        prevNextButtons: true,
        pageDots: false,
        autoPlay: true,
        wrapAround: true,
        groupCells: true,
        selectedAttraction: 0.1, // Visuellen Effekt für das Scrollen
        friction: 0.6,
      });
    }
  
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);
  const renderFlickitySlider = () => {
    return (
      <div className="flickity-slider" ref={flickityRef}>
        {projects.map((project, index) => (
          <div className="cell" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="mobileCard">
                <div className="mobileImgBx">
                  <Image src={project.icon} alt={project.title} />
                </div>
                <div className="mobileContent">
                  <Text align="center" size="xl" mt="sm">
                    {project.title}
                  </Text>
                  <Text align="center" size="md" c="dimmed" mb="xl">
                    {project.description}
                  </Text>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="projects">
      <Container className="container">
        <Title className="title" data-aos="fade-left" c="white">
          My Projects
        </Title>
        {isMobile ? (
          renderFlickitySlider()
        ) : (
          <Grid gutter="xl">
            {projects.map((project, index) => (
              <Grid.Col key={index} span={6}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div
                    className="card"
                    ref={(el) => (tiltRefs.current[index] = el)}
                  >
                    <div className="imgBx">
                      <Image
                        src={project.icon}
                        alt={project.title}
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="content">
                      <Text align="center" size="xl" mt="sm">
                        {project.title}
                      </Text>
                      <Text align="center" size="md" c="dimmed" mb="xl">
                        {project.description}
                      </Text>
                    </div>
                  </div>
                </a>
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Container>
    </section>
  );
}

export default Projects;
