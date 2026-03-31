import React from 'react'
import { useParams } from 'react-router-dom'

const DynamicDetail = () => {

  const params=useParams()


//  const param=useParams()
//  console.log(param)

  return (
    <div className='text-white'>
      <h1>{params.id} DynamicDetail</h1>
    </div>
  )
}

export default DynamicDetail
