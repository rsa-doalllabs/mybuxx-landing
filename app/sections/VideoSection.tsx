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
import React from 'react'

const VideoSection = () => {
  return (
    <video src="/videos/5044131_cash_man_credit_3840x2160.mp4" preload='auto' className='flex h-full w-full' loop playsInline controls autoPlay >
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
    </video>
  )
}

export default VideoSection