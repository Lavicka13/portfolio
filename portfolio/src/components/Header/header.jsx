import { IconChevronDown } from '@tabler/icons-react';
import { Burger, Center, Container, Group, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState, useEffect } from 'react';
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
    label: 'Download Resume',
    download: true, // CV-Link hat ein Download-Flag
  },
  { link: "#contact", label: 'Contact Me' }
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (!skillsSection) return;

      const skillsTop = skillsSection.getBoundingClientRect().top;
      setIsScrolled(skillsTop <= 0); // Ändert Zustand basierend auf Scroll-Position
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Funktion für das sanfte Scrollen
  const handleSmoothScroll = (event) => {
    event.preventDefault();  // Verhindert das Standard-Scrollen

    const targetId = event.currentTarget.getAttribute('href').substring(1);  // Entfernt das '#' von der URL
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Sanftes Scrollen
        block: 'start',     // Scrollt zum Anfang des Ziels
      });
    }
  };

  const items = links.map((link) => {
    if (link.download) {
      return (
        <a
          key={link.label}
          href={link.link}
          download
          className={`${classes.link} ${isScrolled ? classes.lightLink : classes.darkLink}`}
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
          className={`${classes.menuItem} ${isScrolled ? classes.lightLink : classes.darkLink}`}
          onClick={handleSmoothScroll} // Hier fügen wir auch das Scrollen für Untermenü-Links hinzu
        >
          {item.label}
        </a>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={`${classes.link} ${isScrolled ? classes.lightLink : classes.darkLink}`}
              onClick={handleSmoothScroll} // Hier wird die Scroll-Funktion auch für den Hauptlink angewendet
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown className={`${classes.dropdownMenu} ${isScrolled ? classes.lightDropdown : classes.darkDropdown}`}>
            {menuItems}
          </Menu.Dropdown>
        </Menu>
      );
    }

    // Wenn es kein Untermenü gibt, wird der Link mit der Scroll-Funktion versehen
    return (
      <a
        key={link.label}
        href={link.link}
        onClick={handleSmoothScroll}  // Scroll-Funktion für Links ohne Untermenü
        className={`${classes.link} ${isScrolled ? classes.lightLink : classes.darkLink}`}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header
      className={`${classes.header} ${isScrolled ? classes.lightHeader : classes.darkHeader}`}
    >
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
