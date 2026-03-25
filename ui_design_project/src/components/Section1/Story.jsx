import React from 'react'
import StoryContent from './StoryContent'

const Story = (props) => {
  return (
    <div className=' h-full  overflow-hidden relative rounded-4xl '>
      <img className='h-full w-full object-cover' src={props.img} alt=''></img>
     
     <StoryContent color={props.color} id={props.id} tag={props.tag} intro={props.intro}/>


    </div>
  )
}

export default Story
