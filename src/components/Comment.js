import React from 'react'

const Comment = ({data}) => {
    const {name,text}=data;
  return (
    <div className='py-2 px-1 flex shadow-sm bg-gray-100 rounded-md items-center'>
        <img className='w-8 h-8'
         src='https://w7.pngwing.com/pngs/529/816/png-transparent-computer-icons-user-profile-avatar-heroes-monochrome-black-thumbnail.png'
        alt=''/>
        <div className='px-3 text-sm'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment