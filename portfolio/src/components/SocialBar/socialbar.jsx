import React from 'react';
import { Group } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';
import './socialbar.css'; // Für die Stildefinition

function SocialBar() {
  return (
    <div className="social-bar">
      <Group direction="column" spacing="sm" position="center">
        <a href="https://github.com/Lavicka13" target="_blank" rel="noopener noreferrer">
          <IconBrandGithub size={32} color="white" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <IconBrandLinkedin size={32} color="white" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <IconBrandTwitter size={32} color="white" />
        </a>
      </Group>
    </div>
  );
}

export default SocialBar;
