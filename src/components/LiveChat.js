import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessages } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage,setLiveMessage]=useState("");
  const dispatch=useDispatch();
  const ChatMessages = useSelector((store)=>store.chat.messages);
  useEffect(()=>{
    const i=setInterval(()=>{
      console.log("API calling")
      dispatch(
        addMessage({
          name:generateRandomName(),
          message:makeRandomMessages(25),
        })
      )
    },2000)
    return()=>{
      clearInterval(i);
    }
  },[])
  return (
    <>
    <div className='w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 overflow-y-scroll rounded-md flex flex-col-reverse'>
     <div>
      {/*don't use index as key*/}
      {ChatMessages.map((c,i)=><ChatMessage key={i} name= {c.name} message={c.message} />)}
      </div>
    </div>

    <form 
     className='w-full p-2 ml-2 border border-black'
     onSubmit={(e)=>{e.preventDefault();
      dispatch(
        addMessage({
          name:"Jennifer Christy",
          message:liveMessage,
        })
      );
      setLiveMessage('')
    }}
    >
    <input className='w-80 px-2' 
    type='text'
    value={liveMessage} 
    onChange={(e)=>{setLiveMessage(e.target.value)}}
    />
    <button className='px-4 mx-4 bg-green-100'>Send</button>
    </form>
    </>
  )
}

export default LiveChat