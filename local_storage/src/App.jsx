import React from 'react'

const App = () => {
  // localStorage.clear()
  // sessionStorage.clear()
  // localStorage.setItem("Name","Utkarsh")
  // const user= localStorage.getItem("Name")
  // localStorage.removeItem("user")
  // console.log(user)

  const user={
    username: 'Utkarsh',
    age:'21',
    city:'Delhi'
  }



   localStorage.setItem('user', JSON.stringify(user))

   const r=JSON.parse(localStorage.getItem('user'))
   console.log(user)

  return (
    <div>
      App
      
    </div>
  )
}

export default App
