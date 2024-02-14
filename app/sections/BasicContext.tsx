/*
 * File: BasicContext.tsx
 * Project: next-enterprise
 * File Created: Friday February 9th, 2024 | 1:57:18 am
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Friday February 9th, 2024 | 1:57:18 am
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2024
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'
import { MyBuxxCandidUser } from 'images/MyBuxxCandidUser'
import { scrollToDiv } from 'utils/ClickScroll'
import { Button } from 'components/Button/Button'

const BasicContext = () => {
  return (
    <div className="bg-white p-10">
      <div className="container mx-auto flex flex-row xs:max-lg:flex-col items-center justify-between">
        <div className="flex-1">
          <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-500 mb-6">
            Customers are demanding more privacy, efficiency, and control over how they pay for entertainment businesses’ streaming services, including subscriptions and in-game purchases not limited to frequent on-line high-volume transactions.MYBUXX mobile application, outline the forces of changing consumers’ expectations, from evolving technology, driving better connectivity and efficiency, to a greater demand for security, and how alternative payment methods (APMs) can help entertainment businesses evolve and thrive motivated with today`&apos`s trend.
            <a href="#" className="text-blue-600 hover:underline"> Page Types and Components</a>.
          </p>
          <Button href='#footer' className="primary-color bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Join the Wait List
          </Button>
        </div>
        <div className="flex-1 xs:max-md:my-10">
          {/* Assuming you have an illustration.png in your public directory */}
          <img src={MyBuxxCandidUser} alt="Image by cookie_studio on Freepik" className="w-3/4   mx-auto" />
        </div>
      </div>
    </div>
  )
}

export default BasicContext