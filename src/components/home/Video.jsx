import React from 'react'

const Video = () => {
    return (
        <div className='h-full w-full'>
            <video
                className='h-full w-full object-cover' loop muted autoPlay
                src="public\video\video.mp4">
            </video>
        </div>
    )
}

export default Video
