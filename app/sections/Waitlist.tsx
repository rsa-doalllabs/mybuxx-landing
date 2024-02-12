/*
 * File: Waitlist.tsx
 * Project: next-enterprise
 * File Created: Friday February 9th, 2024 | 5:53:35 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Friday February 9th, 2024 | 5:53:35 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2024
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'

const Waitlist = () => {
  return (
    <div className="flex flex-col items-center p-8 rounded-lg h-full">
      <h2 className="text-2xl font-bold text-gray-600 mb-4">Join the Waitlist</h2>
      <form className="w-full max-w-sm">
      <div className="primary-border flex items-center border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Email"
          aria-label="Email"
        />
        <button
          className="primary-color flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default Waitlist