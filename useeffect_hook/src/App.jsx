import React, { useEffect, useState } from 'react'

const App = () => {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(10)


  function num1Changing(){
    console.log("Num1 is changing")
  }

  function num2Changing(){
    console.log("Num2 is changing")
  }
  

  useEffect(function() {
    // console.log('use effect is running...')
    num1Changing()

  },[num1])

  useEffect(function() {
    // console.log('use effect is running...')
    num2Changing()

  },[num2])
  
  
  return (
    <div>
      
      <h1>num1 {num1}</h1>
      <h1>num2 {num2}</h1>
      

      <button
      onMouseEnter={()=>{
        setNum1(num1+1)
      }}>Click num1</button>
      
      <button  
       onMouseLeave={()=>{
        setNum2(num2+10)
      }}>Click num2</button>
      
    </div>
  )
}

export default App
