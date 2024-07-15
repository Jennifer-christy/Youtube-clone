import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParams]=useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(closeMenu());
    },[])
  return (
    <div className='p-5 '>
      <div className='flex'>
      <div>
        <iframe className='rounded-2xl'
        width="1000" 
        height="550"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
        </iframe>
        </div>
        <div className=' px-5 '>
        <LiveChat/>
        </div>
        </div>
        <CommentsContainer/>
    </div>
  )
}

export default WatchPage