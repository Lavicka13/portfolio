import { IconChevronDown } from '@tabler/icons-react';
import { Burger, Center, Container, Group, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useRef } from 'react';
import classes from './HeaderMenu.module.css';

const links = [
  { link: '#about', label: 'About' },
  { link: '#skills', label: 'Skills' },
  {
    link: '#projects',
    label: 'Projects',
    links: [
      { link: 'https://github.com/Lavicka13/musicplayer.git', label: 'MusicPlayer' },
      { link: 'https://github.com/Lavicka13/LaenderQuiz.git', label: 'Country Quiz' },
      { link: 'https://github.com/Lavicka13/todo-list-app.git', label: 'To Do List' },
    ],
  },
  {
    link: '/assets/CV.pdf',
    label: 'Download CV',
    download: true, // CV-Link hat ein Download-Flag
  },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current; // Header-Element
    const sections = document.querySelectorAll('.section'); // Abschnitte mit der Klasse "section"

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('light-background')) {
              header.classList.add(classes.lightHeader); // Füge Klasse für dunkle Schrift hinzu
              header.classList.remove(classes.darkHeader); // Entferne Klasse für helle Schrift
            } else {
              header.classList.add(classes.darkHeader); // Füge Klasse für helle Schrift hinzu
              header.classList.remove(classes.lightHeader); // Entferne Klasse für dunkle Schrift
            }
          }
        });
      },
      { threshold: 0.95 } // 50% des Abschnitts müssen sichtbar sein
    );

    // Beobachte jeden Abschnitt
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Bereinigen
  }, []);

  const items = links.map((link) => {
    if (link.download) {
      return (
        <a
          key={link.label}
          href={link.link}
          download
          className={classes.link}
        >
          {link.label}
        </a>
      );
    }

    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.menuItem}
        >
          {item.label}
        </a>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <header ref={headerRef} className={`${classes.header} ${classes.darkHeader}`}>
      <Container size="md">
        <div className={classes.inner}>
          <Group gap={4} visibleFrom="md">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="md" hiddenFrom="md" />
        </div>
      </Container>
    </header>
  );
}

export default HeaderMenu;
