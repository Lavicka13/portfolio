import React, { useEffect, useRef } from 'react';
import { Grid, Image, Container, Text, Title } from '@mantine/core';
import VanillaTilt from 'vanilla-tilt';
import './projects.css';

const projects = [
  {
    title: 'Random Quote Generator',
    description: 'I learned how to fetch data from an API and display it dynamically, while improving my understanding of JavaScript promises and fetch calls.',
    icon: '/assets/projects/quotegenerator.png',
    link: 'https://github.com/Lavicka13/QuoteGenerator', 
  },
  {
    title: 'Music Player',
    description: 'This project taught me how to set up a mock API, manage state effectively, and create an interactive UI with React for audio playback functionality.',
    icon: '/assets/projects/musicplayer.png',
    link: 'https://github.com/Lavicka13/musicplayer', 
  },
  {
    title: 'To Do List',
    description: 'My first project using React and the Mantine library, where I learned component structuring, state management, and modern UI design principles.',
    icon: '/assets/projects/todolist.png',
    link: 'https://github.com/Lavicka13/todo-list-app', 
  },
  {
    title: 'Login Form',
    description: 'A deeper dive into React and Mantine library to create a user-friendly and responsive login form with validation and state handling.',
    icon: '/assets/projects/loginform.png',
    link: 'https://github.com/Lavicka13/login_form2', 
  },
];

function Projects() {
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 1,
        });
      }
    });
  }, []);

  return (
    <section id="projects" className="section light-background">
      <Container className='container'>
        <div style={{ height: '1px', marginTop:'80px'}} aria-hidden="true"></div>
        <Title className="title">My Projects</Title>
        <Grid gutter="xl">
          {projects.map((project, index) => (
            <Grid.Col key={index} span={6} style={{ marginBottom: '80px' }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer"> {/* Link um das Bild klickbar zu machen */}
                <div className="card" ref={(el) => (tiltRefs.current[index] = el)}>
                  <div className="imgBx">
                    <Image
                      src={project.icon}
                      alt={project.title}
                      width={300}
                      height={300}
                      className="iconproject"
                    />
                  </div>
                  <Container className='content'>
                    <Text align="center" size="xl" mt="sm">{project.title}</Text>
                    <Text align="center" size="md" c="dimmed" mb="xl">{project.description}</Text>
                  </Container>
                </div>
              </a>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Projects;
