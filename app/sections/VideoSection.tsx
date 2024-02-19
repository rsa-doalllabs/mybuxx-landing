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

import { useInView } from 'framer-motion'
import React, { Suspense, useEffect, useRef } from 'react'


const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null!)
  const isInView = useInView(videoRef)

  const url = '/public/videos/cashman.mp4'

  useEffect(() => {
    if (isInView) {
      videoRef.current.play()
    }
  }, [isInView])

  return (
    <Suspense fallback="<p>...Loading video...</p>">
      <video className='flex h-full w-full'
        ref={videoRef}
        src={url}
        controls={false}
        muted={true}
        loop={true}
        autoPlay={true}
        playsInline={true}
      >
      </video>
    </Suspense>
  )
}

export default VideoSection