import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  //Early return pattern
  if(!isMenuOpen)return null;
  return (
    <div className=' p-6 shadow-lg w-48 '>
       <ul>
       <Link to="/" ><li className='py-2'>Home</li></Link>
        <li className='py-2'>Shorts</li>
        <li className='py-2'>Subscriptions</li>
       </ul>
       <hr/>
      {/*<ul>
        <li className='py-2'>Library</li>
        <li className='py-2'>History</li>
        <li className='py-2'>Your videos</li>
        <li className='py-2'>Watch later</li>
        <li className='py-2'>Downloads</li>
        <li className='py-2'>Liked Videos</li>
      </ul>
  <hr/>*/}
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li className='py-2'>Music</li>
        <li className='py-2'>Gaming</li>
        <li className='py-2'>Sports</li>
        <li className='py-2'>Movies</li>
      </ul>
      <hr/>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li className='py-2'>Music</li>
        <li className='py-2'>Gaming</li>
        <li className='py-2'>Sports</li>
        <li className='py-2'>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar