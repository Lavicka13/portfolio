import React from 'react';
import { Grid, Title, Tooltip, Image, Container } from '@mantine/core';
import './skills.css';


const skills = [
  { title: 'C#', picture: '/assets/icons/c.svg' },
  { title: 'React', picture: '/assets/icons/react.svg' },
  { title: 'GIT', picture: '/assets/icons/git.png' },
  { title: 'JavaScript', picture: '/assets/icons/js.png' },
  { title: 'HTML', picture: '/assets/icons/html.svg' },
  { title: 'CSS', picture: '/assets/icons/css.svg' },
  { title: 'Visual Studio Code', picture: '/assets/icons/visual-studio-code.svg' },
  { title: 'MySQL', picture: '/assets/icons/MySQL_logo.svg' },
  { title: 'Mantine', picture: '/assets/icons/mantine.com.png' },
  { title: 'Figma', picture: '/assets/icons/figma.png' },
  { title: 'Canva', picture: '/assets/icons/canva.svg' },
  { title: 'Slack', picture: '/assets/icons/slack.svg' },
];

function Skills() {
  return (
    <section id="skills">
    <Container>
    <div style={{ height: '20px', marginTop: '-50px' }} aria-hidden="true"></div>
      <Title className = 'title'>Skills</Title>
      <Grid gutter="xl">
        {skills.map((skill, index) => {
          //const isJavaScript = skill.title === 'JavaScript'; -> wird nicht mehr benötigt
          
          return (
            <Grid.Col key={index} span={4}>
              <Tooltip label={skill.title} position="top" withArrow>
                <div className="icon-wrapper" >
                  <Image
                    src={skill.picture}
                    alt={skill.title}
                    width={80}
                    height={80}
                    className="icon"
                    //style={isJavaScript ? { width:'150px' , height:'130px'} : {}} -> wird nicht benötigt
                  />
                </div>
              </Tooltip>
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
    </section>
  );
}

export default Skills;
