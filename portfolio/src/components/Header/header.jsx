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
    download: true,
  },
  { link: '#contact', label: 'Contact Me' },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Header wechselt bei Scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown className={classes.dropdownMenu}>
            {menuItems}
          </Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        onClick={handleSmoothScroll}
        className={classes.link}
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
