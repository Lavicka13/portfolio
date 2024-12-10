
  import React from 'react';
  import { Grid, Tooltip, Image, Container, Text, Title } from '@mantine/core';
  import './projects.css';
  
  const projects = [
    {
      title: 'Random Quote Generator',
      description: 'I learned how to fetch data from an API and display it dynamically, while improving my understanding of JavaScript promises and fetch calls.',
      icon: '/assets/projects/quotegenerator.png',
    },
    {
      title: 'Music Player',
      description: 'This project taught me how to set up a mock API, manage state effectively, and create an interactive UI with React for audio playback functionality.',
      icon: '/assets/projects/musicplayer.png',
    },
    {
      title: 'To Do List',
      description: 'My first project using React and the Mantine library, where I learned component structuring, state management, and modern UI design principles.',
      icon: '/assets/projects/todolist.png',
    },
    {
      title: 'Login Form',
      description: 'A deeper dive into React and Mantine library to create a user-friendly and responsive login form with validation and state handling.',
      icon: '/assets/projects/loginform.png',
    },
  ];
  
  
  function Projects() {
    return (
      <Container>
        <Title className="title">My Projects</Title>
        <Grid gutter="xl">
          {projects.map((project, index) => (
            <Grid.Col key={index} span={6} style={{ marginBottom: '80px' }}>
              
                <div className="icon-wrapper-project">
                  <Image
                    src={project.icon}
                    alt={project.title}
                    width={300}
                    height={300}
                    
                    className="iconproject"
                  />
                </div>
              
              <Text align="center" mt="sm">{project.title}</Text>
              <Text align="center" size="sm" c="dimmed">{project.description}</Text>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    );
  }
  
  export default Projects;
  
