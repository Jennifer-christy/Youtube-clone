import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {
  return comments.map((comment,index)=>
  <div>
    <Comment key={index} data={comment}/>
    <div className='pl-5 ml-5 my-4 border border-l-slate-950'>
    <CommentsList  comments={comment.replies}/>
    </div>
  </div>
  

  )
   
  
}

export default CommentsList