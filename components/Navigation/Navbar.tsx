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

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center w-full ">
        <img src={Mybuxx_Primary} width="300" alt="dt-logo" />
        <div className='flex w-full me-10 justify-evenly'>
          <a href="#about" className="text-red-600 border-b-2 border-red-600 pb-1 font-semibold">About</a>
          <a href="#mission" className="ml-6 text-gray-800 hover:text-red-600 transition duration-300">Mission</a>
          <a href="#demand" className="ml-6 text-gray-800 hover:text-red-600 transition duration-300">Focus</a>
          <a href="#feature" className="ml-6 text-gray-800 hover:text-red-600 transition duration-300">Feature</a>
          <button className="secondary-color text-white  text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Join the Wait List
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar