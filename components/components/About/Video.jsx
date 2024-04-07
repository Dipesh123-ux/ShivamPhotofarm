import React from 'react'

const Video = ({VideoLink}) => {
    console.log(VideoLink.link);
  return (
    <div>
        <div className="flex  justify-center h-[300px] sm:h-[500px] md:h-screen">
                <iframe
                    className="w-4/5 h-4/5  rounded-lg"
                    // src={VideoLink.link}
                    src={(`${VideoLink.link}`)}
                    // src={`${youtube1.url}?rel=0`}
                    title="YouTube Video"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>


            </div>
    </div>
  )
}

export default Video
