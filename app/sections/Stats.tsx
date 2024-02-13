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
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 h-full">
      <h2 className="text-4xl font-semibold mb-4">Fintech Made Easy</h2>
      <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
        <Head>
          <title>Payments Made Easy</title>
        </Head>

        {/* Users */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 secondary-color rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white hover:stroke-cyan-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Account</h3>
          <p className="text-gray-500 dark:text-gray-400">Account Verification</p>
        </div>

        {/* Locations */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 secondary-color rounded-full flex items-center justify-center">
            {/* Icon placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white hover:stroke-cyan-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>

          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Verification Embedded</h3>
          <p className="text-lg mt-2">test</p>
        </div>

        {/* Servers */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 secondary-color rounded-full flex items-center justify-center">
            {/* Icon placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white hover:stroke-cyan-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
            </svg>

          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Accurate Customer Data</h3>
          <p className="text-lg mt-2">Up-to-Date Accurate Customer Account</p>
        </div>

        {/* Servers */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 secondary-color rounded-full flex items-center justify-center">
            {/* Icon placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white hover:stroke-cyan-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
            </svg>


          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Risk-Detection</h3>
          <p className="text-lg mt-2"> Non-Sufficient Funds (NSF) or Fraud</p>
        </div>

        {/* Servers */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 secondary-color rounded-full flex items-center justify-center">
            {/* Icon placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white hover:stroke-cyan-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>

          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Instant Payouts</h3>
          <p className="text-lg mt-2"> TO CUSTOMERS</p>
        </div>

        {/* Servers */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 secondary-color rounded-full flex items-center justify-center">
            {/* Icon placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white hover:stroke-cyan-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Always Available</h3>
          <p className="text-lg mt-2">24/7/365</p>
        </div>

      </div>
    </div>
  )
}

export default Stats