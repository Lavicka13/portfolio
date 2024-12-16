import React from 'react';
import { Grid, Title, Tooltip, Image, Container } from '@mantine/core';
import './skills.css';

const skills = [
  { title: 'C#', picture: '/assets/icons/c.svg', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
  { title: 'React', picture: '/assets/icons/react.svg', url: 'https://reactjs.org/' },
  { title: 'GIT', picture: '/assets/icons/git.png', url: 'https://git-scm.com/' },
  { title: 'JavaScript', picture: '/assets/icons/js.png', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { title: 'HTML', picture: '/assets/icons/html.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { title: 'CSS', picture: '/assets/icons/css.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { title: 'Visual Studio Code', picture: '/assets/icons/visual-studio-code.svg', url: 'https://code.visualstudio.com/' },
  { title: 'MySQL', picture: '/assets/icons/MySQL_logo.svg', url: 'https://www.mysql.com/' },
  { title: 'Mantine', picture: '/assets/icons/mantine.com.png', url: 'https://mantine.dev/' },
  { title: 'Figma', picture: '/assets/icons/figma.png', url: 'https://www.figma.com/' },
  { title: 'Canva', picture: '/assets/icons/canva.svg', url: 'https://www.canva.com/' },
  { title: 'Slack', picture: '/assets/icons/slack.svg', url: 'https://slack.com/' },
];

function Skills() {
  return (
    <section id="skills">
      <Container>
        <div style={{ height: '20px' }} aria-hidden="true"></div>
        <Title className="title">Skills</Title>
        <Grid gutter="xl">
          {skills.map((skill, index) => {
            return (
              <Grid.Col key={index} span={4}>
                <Tooltip label={skill.title} position="top" withArrow >
                  <a href={skill.url} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <div className="icon-wrapper">
                      <Image
                        src={skill.picture}
                        alt={skill.title}
                        width={80}
                        height={80}
                        className="icon"
                      />
                    </div>
                  </a>
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
