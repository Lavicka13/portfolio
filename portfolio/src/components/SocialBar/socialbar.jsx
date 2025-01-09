import React from 'react';
import { Group, Text } from '@mantine/core';
import { IconBrandGithub, IconMail, IconDeviceMobile } from '@tabler/icons-react';

import './socialbar.css'; // Für die Stildefinition

function SocialBar() {
  return (
    <div className="social-bar">
      <Group direction="column" spacing="sm" position="center">
        {/* GitHub Link */}
        <a href="https://github.com/Lavicka13" target="_blank" rel="noopener noreferrer">
          <IconBrandGithub size={32} color="white" />
        </a>
  
         {/* E-Mail Link */}
        <a href="mailto:lukaslavick@gmail.com" target="_blank" rel="noopener noreferrer">
          <IconMail size={32} color="white" />
        </a>
    
        {/* Telefon Link */}
        <a href="tel:+4915256801795" target="_blank" rel="noopener noreferrer">
          <IconDeviceMobile size={32} color="white"/>
        </a> 
      </Group>
      
    </div>
  );
}

export default SocialBar;
