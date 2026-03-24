import React from 'react'
import Story from './Story'


const RightContent = (props) => {
  return (
    <div id='rgt' className='h-full flex-1 min-w-0 overflow-x-auto'>
      <div className='h-full w-max flex gap-5 pr-2'>
        {props.users.map(function (elem, idx) {
          return <div key={idx} className='h-full w-64 shrink-0'>
                      <Story color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
                 </div>
        })}

      </div>
    </div>
  )
}

export default RightContent
