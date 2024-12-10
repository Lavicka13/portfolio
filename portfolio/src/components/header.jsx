import { IconChevronDown } from '@tabler/icons-react';
import { Burger, Center, Container, Group, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './HeaderMenu.module.css';

const links = [
  { link: './About.jsx', label: 'About' },
  { link: './skills.jsx', label: 'Skills' },
  {
    link: './Projects.jsx',
    label: 'Projects',
    links: [
      { link: 'https://github.com/Lavicka13/musicplayer.git', label: 'MusicPlayer' },
      { link: 'https://github.com/Lavicka13/LaenderQuiz.git', label: 'Country Quiz' },
      { link: 'https://github.com/Lavicka13/todo-list-app.git', label: 'To Do List' },
    ],
  },
 
  { link: './cv.jsx', label: 'CV',
    links: [
      { link: './cv.jsx', label: 'Download CV' },]
   },
  
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <a
          href={item.link}
          target="_blank" // Öffnet den Link in einem neuen Tab
          rel="noopener noreferrer" // Sicherheitsbestimmungen für externe Links
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
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
       
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
       
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
} 
export default HeaderMenu;