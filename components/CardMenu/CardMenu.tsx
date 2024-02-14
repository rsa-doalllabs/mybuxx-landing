/*
 * File: CarMenu.tsx
 * Project: next-enterprise
 * File Created: Tuesday February 13th, 2024 | 4:17:27 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Tuesday February 13th, 2024 | 4:17:27 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2024
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
'use client'

import React, { useState, useEffect } from 'react';

interface CardItem {
  title: string;
  description: string;
  imageUrl: string;
}

const cardItems: CardItem[] = [
  // Populate with your menu items
  {
    title: 'Card Title 1',
    description: 'Description for card 1',
    imageUrl: '/path-to-your-image-1.jpg',
  },
  {
    title: 'Card Title 2',
    description: 'Description for card 2',
    imageUrl: '/path-to-your-image-2.jpg',
  },
  // Add more cards as needed
];

const CardMenu: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (

    <></>

  );
};

export default CardMenu;
