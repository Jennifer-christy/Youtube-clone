import React from 'react'
import Button from './Button'


const list=["All","Gaming","sports","Songs",
            "News","Cricket","Comedy","Cooking",
            "Travel","Vijay","Adventure","Workout"]
const ButtonList = () => {
  return (
    <div className='flex'>
     {/*
     <Button name='All'/>
      <Button name='Gaming'/>
      <Button name='sports'/>
      <Button name='Songs'/>
      <Button name='News'/>
      <Button name='Cricket'/>
      <Button name='Comedy'/>
      <Button name='cooking'/>
      <Button name='Travel'/>
      <Button name='Vijay'/>
      <Button name='Adventure'/>
      <Button name='Workout'/>
      <Button name='Vijay'/> */} 
      {list.map((name,index)=><Button key= {index} name={name}/>)}
    </div>
  )
}

export default ButtonList