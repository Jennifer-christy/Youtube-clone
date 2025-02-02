import React from 'react'

const VideoCard = ({ info }) => {
    //console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 shadow-lg w-64'>
      <img className="rounded-xl"  src={thumbnails.medium.url} alt="Video"/>
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  )
}

export default VideoCard