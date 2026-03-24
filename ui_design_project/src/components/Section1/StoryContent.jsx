import React from 'react'

const StoryContent = (props) => {
  return (
 
       <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>

        <h2 className="bg-amber-50 w-10 aspect-square rounded-full font-bold flex items-center justify-center">{props.id+1}</h2>
        <div className=''>
          <p className=' leading-normal text-white mb-8'></p>

          <div className=' flex justify-between'>
            <button style={{backgroundColor:props.color}} className=' rounded-full px-4 py-1 text-white'>{props.tag}</button>
            <button className='bg-blue-600 rounded-full px-4 py-1 text-white font-medium'><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>

      </div>
    
  )
}

export default StoryContent


