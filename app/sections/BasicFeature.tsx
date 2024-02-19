/*
 * File: BasicFeature.tsx
 * Project: next-enterprise
 * File Created: Friday February 9th, 2024 | 9:26:51 am
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Friday February 9th, 2024 | 9:26:51 am
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2024
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */


import React from 'react'
import { MyBuxx_Iphone } from 'images/MyBuxx-Iphone'

const BasicFeature = () => {
  return (
    <div className="bg-white p-10 flex ">
      <div className="container mx-auto flex xs:max-lg:flex-col items-center justify-between">
        <div className="flex-1 order-2">
          <h2 className="text-4xl font-semibold mb-4">Feature Focus</h2>
          <p className="text-gray-500 mb-6">
            MYBUXX currently has an average customer base of twenty-seven thousand members participating in the online service. The mobile application volume currently averages forty thousand weekly, resulting in high traffic. Customer satisfaction with MYBUXX App is based on its low fees and timely payment deliverables.
          </p>
          <button className="primary-color text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Join the Wait List
          </button>
        </div>
        <div className="flex-1 order-1">
          {/* Assuming you have an illustration.png in your public directory */}
          <img src={MyBuxx_Iphone} width={500} alt='MyBuxxIphone' />
        </div>
      </div>
    </div>
  )
}

export default BasicFeature