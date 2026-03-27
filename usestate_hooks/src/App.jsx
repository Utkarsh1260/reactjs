import React, { useState } from 'react'

const App = () => {



  const [a,setA] = useState(20)
  const [user,setUser] = useState("Naman")
  const [counter,count] = useState(0)

  function ChangeValue(){
    setA(a+10)
    setUser("Raman")
  }
  function increase(){
    count(counter+1)
  
  }
  function decrease(){
    count(counter-1)
  
  }
  function jumpby25(){
    count(counter+25)
   
  }
  

  return (
    <div>
      <h1>Hello, value of a is {a}</h1>
      <h2>Hello, user is {user}</h2>
      <p>{counter}</p>
      <button onClick={ChangeValue} >Click me</button>
      <button onClick={increase} >Increase</button>
      <button onClick={decrease} >Decrease</button>
      <button onClick={jumpby25} >Jump by 25</button>
          </div>
  )
}

export default App
