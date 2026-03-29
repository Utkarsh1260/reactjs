import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])


  //Second way to use api in reacjs
  const getData =async ()=>{

    const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
    console.log(response.data)

    setData(response.data)
  }


  // // first way to use api in reacjs
  // async function getData(){
  //   const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  return (
    <div>
            <button onClick={getData}>Get Data</button>
            <div>
              {data.map(function(elem, idx){
                return <h3>Hello, {elem.author} {idx}</h3>
              })}
            </div>
    </div>
  )
}

export default App
