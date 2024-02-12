/*
 * File: Footer.tsx
 * Project: next-enterprise
 * File Created: Friday February 9th, 2024 | 9:56:34 am
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Friday February 9th, 2024 | 9:56:34 am
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2024
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import Image from 'next/image';
import React from 'react';
import { Mybuxx_Primary } from 'images/Mybuxx-Primary';
import Waitlist from 'app/sections/Waitlist';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 h-full">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          <div className="flex items-center">
            {/* Replace with your actual logo */}
            <img src={Mybuxx_Primary} width="300" alt="dt-logo" />
            {/* <span className="font-bold text-lg ml-3">Keep in Touch</span> */}
          </div>
          <div>
            <Waitlist/>
          </div>
          <div className="flex">
            {/* The navigation items */}
            <a href="#about" className="text-gray-600 hover:text-red-500 px-2">About</a>
            <a href="#mission" className="text-gray-600 hover:text-red-500 px-2">Mission</a>
            <a href="#demand" className="text-gray-600 hover:text-red-500 px-2">Focus</a>
            <a href="#feature" className="text-gray-600 hover:text-red-500 px-2">Feature</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
