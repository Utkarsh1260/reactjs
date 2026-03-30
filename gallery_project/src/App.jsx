import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {


  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)


    setUserData(response.data)
  }


  useEffect(() => {
    getData()
  }, [index])


  let printUserData = <h3 className='text-gray-400 text-xl absolute top-1/2 left-1/2'>Loading...</h3>
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 bg-white'>
            <img className='h-full bg-cover' src={elem.download_url}></img>
          </div>
          <h2>{elem.author}</h2>
        </a>

      </div>
    })
  }

  return (
    <div className='bg-black h-screen p-4 text-white'>

      <button onClick={getData} className='bg-amber-700 active:scale-95 mb-3 px-5 py-2 rounded text-white'>Get Data</button>
      <h3>{index}</h3>
      <div className='flex flex-wrap gap-28'>{printUserData}</div>
      <button

        style={{ opacity: index == 1 ? 0.5 : 1 }} // condition based styling

        onClick={() => {
          setUserData([])
          if (index > 1)
            setIndex(index - 1)
        }} className='bg-amber-400  rounded-md text-black'>Prev</button>

      <h4 className='text-black'>Page {index}</h4>
      <button
        onClick={() => {
          setUserData([])

          setIndex(index + 1)
        }} className='bg-amber-400 rounded-md text-black'>Next</button>
    </div>
  )
}

export default App


// get
// post
// patch