/*
 * File: HamburgerMenu.tsx
 * Project: next-enterprise
 * File Created: Tuesday February 13th, 2024 | 9:03:19 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Tuesday February 13th, 2024 | 9:03:19 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2024
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
'use client'

import { Button } from 'components/Button/Button';
// components/HamburgerMenu.tsx
import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed top-0 right-0'>
      <button
        className="p-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Popup Menu */}
      {isOpen && (
        <div className="absolute font-gray-300 top-0 w-60 right-0 mt-12 mr-4 p-5 bg-gray-50 shadow-lg rounded-lg">
          <div className="flex justify-between items-center">
            <button onClick={({ }: any) => setIsOpen(false)} className='right top-0 right-0'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul>
            <li className="p-2 hover:bg-gray-50 text-gray-600 "><a href="#about">About</a></li>
            <li className="p-2 hover:bg-gray-50 text-gray-600 "><a href="#mission">Mission</a></li>
            <li className="p-2 hover:bg-gray-50 text-gray-600 "><a href="#demand">Focus</a></li>
            <li className="p-2 hover:bg-gray-50 text-gray-600 "><a href="#feature">Feature</a></li>
            <li className="p-2 hover:bg-gray-50 text-gray-600 "><a href="#footer">Join the Wait List</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
