/*
 * File: VideoSection.tsx
 * Project: next-enterprise
 * File Created: Tuesday February 13th, 2024 | 1:54:25 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Tuesday February 13th, 2024 | 1:54:25 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2024
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

'use client'

import React, { Suspense } from 'react'


const VideoSection = () => {

  return (
    <Suspense fallback="<p>...Loading video...</p>">
      <video className='flex h-full w-full' loop playsInline controls autoPlay muted>
        <source src={require('../../public/videos/cashman.mp4')} type='video/mp4' />
      </video>
    </Suspense>
  )
}

export default VideoSection