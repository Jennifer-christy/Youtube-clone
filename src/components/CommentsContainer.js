import React from 'react'

import CommentsList from './CommentsList'

const commentsData=[
    {
        name:'Jennifer',
        text:'Hi this is jennifer learning namaste react course',
        replies:[]
    },
    {
        name:'Jennifer',
        text:'Hi this is jennifer learning namaste react course',
        replies:[
            {
                name:'Jennifer',
                text:'Hi this is jennifer learning namaste react course',
                replies:[
                   {
                    name:'Jennifer',
                    text:'Hi this is jennifer learning namaste react course',
                    replies:[]
                   }, 
                   {
                    name:'Jennifer',
                    text:'Hi this is jennifer learning namaste react course',
                    replies:[
                        {
                            name:'Jennifer',
                            text:'Hi this is jennifer learning namaste react course',
                            replies:[]
                        },
                    ]
                   }, 
                ]
            },
        ]
    },
    {
        name:'Jennifer',
        text:'Hi this is jennifer learning namaste react course',
        replies:[]
    },
    {
        name:'Jennifer',
        text:'Hi this is jennifer learning namaste react course',
        replies:[]
    },
]


const CommentsContainer = () => {
  return (
    <div className=' px-2 py-4 '>
        <h1 className='text-xl font-bold'> Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer