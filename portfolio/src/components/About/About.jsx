import React from 'react';
import { Container, Title, Text, Image, Group } from '@mantine/core';
import myImage from './me.png';
import './about.css'; // Importiere die CSS-Datei

function About() {
    
  return (
    <section id="about" className="about-section">
      <div className="overlay"></div>  {/* Overlay als separates Div */}
      <Container>
        <Title className="titleAbout">About Me</Title>
        <Image className="profilImg" src={myImage} alt="My Image" />
        <Text className="textAbout">I am retraining as a Fullstack Developer, blending creativity with technical skills. I'm focused on self-improvement and applying my knowledge in practical settings.</Text>
      </Container>
    </section>
  );
}

export default About;
