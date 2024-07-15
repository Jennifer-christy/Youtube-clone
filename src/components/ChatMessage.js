import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex p-2 shadow-sm  '>
        <img className="h-6"
        src='https://w7.pngwing.com/pngs/529/816/png-transparent-computer-icons-user-profile-avatar-heroes-monochrome-black-thumbnail.png'
        alt='user'/>
        <span className='px-1 font-bold'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage