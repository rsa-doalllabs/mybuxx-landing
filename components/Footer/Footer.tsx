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
        <div className="flex xs:max-md:flex-col justify-between items-center">

          <div className="flex flex-col items-center">
            {/* Replace with your actual logo */}
            <img src={Mybuxx_Primary} width="300" alt="dt-logo" />
            <div className="dual-column">
              <span className="font-bold text-md ml-3">Address:</span>
              <span className="font-regular text-md ml-3">17828 Mound Road, STE E, Cypress Texas 77433</span>
              <span className="font-bold text-md ml-3">Sales Phone:</span>
              <span className="font-regular text-md ml-3">239-686-0022</span>
              <span className="font-bold text-md ml-3">Office Phone:</span>
              <span className="font-regular text-md ml-3">239-686-0033</span>
              <span className="font-bold text-md ml-3">Email:</span>
              <span className="font-regular text-md ml-3">info@mybuxx.net</span>
              <span className="font-regular text-sm ml-3 text-gray-400">© 2024 - MyBuxx</span>
            </div>
          </div>
          <div>
            <Waitlist />
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
