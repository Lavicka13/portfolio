import React from 'react';
import { Container, Text, Image } from '@mantine/core';
import myImage from './me.png';
import './about.css';

function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <div style={{ height: '125px' }}></div>
        <Image 
          className="profilImg" 
          src={myImage} 
          alt="My Image" 
          data-aos="fade-up" // Animationseffekt
        />
        <Text className="textIntro" data-aos="fade-right">
          Hey, I am <strong>Lukas Lavicka</strong>
        </Text>
        <Text className="textAbout" data-aos="fade-left">
          and I am retraining as a Fullstack Developer, blending creativity with technical skills. I'm focused on self-improvement and applying my knowledge in practical settings.
        </Text>
      </Container>
    </section>
  );
}

export default About;
