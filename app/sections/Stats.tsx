/*
 * File: Stats.tsx
 * Project: next-enterprise
 * File Created: Friday February 9th, 2024 | 1:50:45 am
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Friday February 9th, 2024 | 1:50:45 am
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2024
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'
import Head from 'next/head';


const Stats = () => {
  return (
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
    <Head>
      <title>Payments Made Easy</title>
    </Head>

      {/* Users */}
    <div className="flex flex-col items-center justify-center text-center">
    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
          {/* Icon placeholder */}
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">Account</h3>
        <p className="text-gray-500 dark:text-gray-400">Account Verification</p>
      </div>

      {/* Locations */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center">
          {/* Icon placeholder */}
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">Verification Embedded in the Payment Flow</h3>
        <p className="text-lg mt-2">test</p>
      </div>

      {/* Servers */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center">
          {/* Icon placeholder */}
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">Up-to-Date Accurate Customer Account</h3>
        <p className="text-lg mt-2">Up-to-Date Accurate Customer Account</p>
      </div>

      {/* Servers */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center">
          {/* Icon placeholder */}
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">Risk-Detection Models to Avoid:</h3>
        <p className="text-lg mt-2"> Non-Sufficient Funds (NSF) or Fraud</p>
      </div>

      {/* Servers */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center">
          {/* Icon placeholder */}
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">INSTANT PAYOUTS</h3>
        <p className="text-lg mt-2"> TO CUSTOMERS</p>
      </div>

      {/* Servers */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center">
          {/* Icon placeholder */}
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">ALWAYS AVAILABLE</h3>
        <p className="text-lg mt-2">24/7/365</p>
      </div>
       
        </div>
  </div>
  )
}

export default Stats