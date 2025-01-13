import { Grid, Image, Container, Text, Title } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const renderSwiper = () => {
    try {
      return (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView="auto"
          loop
          centeredSlides
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      );
    } catch (error) {
      console.error("Swiper error:", error);
      return <div>Failed to load Swiper</div>;
    }
  };

  return (
    <section id="projects">
      <Container className="container">
        <Title className="title" data-aos="fade-left" c="white">
          My Projects
        </Title>
        {isMobile ? (
          renderSwiper()
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
