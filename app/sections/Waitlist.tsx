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
'use client'

import React, { useState } from 'react'
import { ContactForm } from 'types';

const Waitlist = () => {

  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);

      // Reset form or show a success message
      setFormData({ name: '', email: '' });
      alert('Email sent successfully!');

    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <div className="flex flex-col items-center p-8 rounded-lg h-full">
      <h2 className="text-2xl font-bold text-gray-600 mb-4">Join the Waitlist</h2>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="md:primary-border flex xs:max-md:flex-col xs:justify-between xs:max-md:h-60 items-center md:border-b-2  py-2">
          <input
            className="appearance-none border-b-2 primary-border bg-transparent border-bottom w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none md:ms-8"
            type="text"
            placeholder="Name"
            aria-label="Name"
          />
          <input
            className="appearance-none border-b-2 primary-border bg-transparent border-bottom w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none md:me-8"
            type="email"
            placeholder="Email"
            aria-label="Email"
          />
          <button
            className="primary-color flex-shrink-0 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
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