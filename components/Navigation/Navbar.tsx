/*
 * File: Navbar.tsx
 * Project: next-enterprise
 * File Created: Friday February 9th, 2024 | 12:06:51 am
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Friday February 9th, 2024 | 12:06:51 am
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2024
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import React from 'react'
import { Mybuxx_Primary } from 'images/Mybuxx-Primary'
import { Button } from 'components/Button/Button'
import HamburgerMenu from 'components/Hamburger/HamburgerMenu'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 top-0  ">
      <div className="flex items-center w-full  ">
        <img src={Mybuxx_Primary} width="300" alt="dt-logo" />
        <div className='flex w-full me-10 justify-evenly xs:max-lg:invisible'>
          <a href="#about" className="hover:text-red-600  pb-1 hover:font-semibold transition duration-600">About</a>
          <a href="#mission" className="ml-6 text-gray-800 hover:text-red-600 transition duration-600 hover:font-semibold">Mission</a>
          <a href="#demand" className="ml-6 text-gray-800 hover:text-red-600 transition duration-600 hover:font-semibold">Focus</a>
          <a href="#feature" className="ml-6 text-gray-800 hover:text-red-600 transition duration-600 hover:font-semibold">Feature</a>
          <Button href="#footer" className="secondary-color text-white  text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-600 hover:font-semibold">
            Join the Wait List
          </Button>
        </div>
        <div className='lg:invisible'>
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar