import React from 'react';
import { Grid, Title, Tooltip, Image, Container, Text } from '@mantine/core';
import './skills.css';

const skills = [
  { title: 'C#', picture: '/assets/icons/c.svg', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/', experience: "4/5" },
  { title: 'React', picture: '/assets/icons/react.svg', url: 'https://reactjs.org/', experience: "3/5" },
  { title: 'GIT', picture: '/assets/icons/git.png', url: 'https://git-scm.com/', experience: "2/5" },
  { title: 'JavaScript', picture: '/assets/icons/js.png', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', experience: "3/5" },
  { title: 'HTML', picture: '/assets/icons/html.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', experience: "4/5" },
  { title: 'CSS', picture: '/assets/icons/css.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', experience: "3/5" },
  { title: 'Visual Studio Code', picture: '/assets/icons/visual-studio-code.svg', url: 'https://code.visualstudio.com/', experience: "4/5" },
  { title: 'MySQL', picture: '/assets/icons/MySQL_logo.svg', url: 'https://www.mysql.com/', experience: "3/5" },
  { title: 'Mantine', picture: '/assets/icons/mantine.com.png', url: 'https://mantine.dev/', experience: "3/5" },
  { title: 'Figma', picture: '/assets/icons/figma.png', url: 'https://www.figma.com/', experience: "2/5" },
  { title: 'Canva', picture: '/assets/icons/canva.svg', url: 'https://www.canva.com/', experience: "4/5" },
  { title: 'Slack', picture: '/assets/icons/slack.svg', url: 'https://slack.com/', experience: "2/5" },
];

function Skills() {
  return (
    <section id="skills">
      <Container>
        <div style={{ height: '250px' }} aria-hidden="true"></div>
        <Title className="title" data-aos="fade-right" c="white">Skills</Title>
        <Grid gutter="xl">
          {skills.map((skill, index) => {
            return (
              <Grid.Col key={index} span={4}>
                <Text align="center" size="sm" mt="sm" className="experience-text" c="white" data-aos="fade-up">
                  {skill.experience}
                </Text>
                <Tooltip label={skill.title} position="top" withArrow>
                  <a href={skill.url} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <div className="icon-wrapper" data-aos="fade-up">
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
                {/* Experience unterhalb der Icons */}
                
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}

export default Skills;
