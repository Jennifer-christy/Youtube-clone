import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { SEARCH_ICON_URL, YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
   const [searchQuery,setSearchQuery]=useState("")
   const [sugesstions,setSugesstions]=useState([])
   const [showSuggestions,setShowSuggestions]=useState(false)
   const dispatch=useDispatch();
   const searchCache=useSelector((store)=>store.search)

   useEffect(()=>{
   
    const timer=setTimeout(()=>{
    if (searchCache[searchQuery]){
      setSugesstions(searchCache[searchQuery])
    }
    else{
      getSearchSugesstion();
    }

    },200);
  
    return ()=>{
      clearTimeout(timer)
    }
    },[searchQuery]);
  

    const getSearchSugesstion= async()=>{
      console.log(searchQuery)
      const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
      const json = await data.json();
      //console.log(json)
      setSugesstions(json[1]);
      dispatch(cacheResults(
        {
          [searchQuery]:json[1],
        }
      ))
    }

 
  const toggleMenuHandler=()=>{
   dispatch(toggleMenu())
  }
  return (
    <div className=' grid grid-flow-col p-4 shadow-lg' >
      <div className='flex col-span-1'>
        <img className='h-8 cursor-pointer'
        onClick={()=>toggleMenuHandler()}
        src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
         alt='menu'/>

        <a href='/'>
        <img  className='h-6 mx-4 my-1'src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt='YOUTUBE-LOGO'/>
        </a>
      </div>
      <div className=' relative col-span-8 px-4 flex mr-40 ml-36'> 
      <div className='flex items-center'>
        <input 
        className=' border border-gray-400 p-2 px-8 w-[35rem] rounded-l-3xl' 
        type='text'
        value={searchQuery} 
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
        placeholder='Search'/>
        <button className='py-3 px-4 border border-gray-400 rounded-r-3xl bg-gray-200'><img className='h-4'src={SEARCH_ICON_URL} alt='search'/></button>
        </div>

        { showSuggestions &&(
        <div className='absolute my-12 mx-4 px-4 bg-white w-[34rem] shadow-lg rounded-xl'>
        <ul>
          {sugesstions.map((s)=><li  key={s} className='flex gap-2  items-center py-2 hover:bg-gray-100'>
            <img className='h-3'src={SEARCH_ICON_URL} alt='search'/>
            {s} </li>)}
          </ul>
        </div>
       ) }           
      </div>
      
      <div className='col-span-2'>
        <img className='h-8'src='https://w7.pngwing.com/pngs/529/816/png-transparent-computer-icons-user-profile-avatar-heroes-monochrome-black-thumbnail.png' alt='user'/>
      </div>
    </div>
  )
}

export default Head