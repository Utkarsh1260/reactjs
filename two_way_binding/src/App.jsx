import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  function submitHandler(e){
    e.preventDefault()
    console.log("Submitted", title)
    setTitle('')
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h2>Contact Form</h2>

          <label>Name</label>
          <input type="text" placeholder="Enter your name" required 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}/>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App