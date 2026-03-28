import React from 'react'

const App = () => {

  function submitHandler(e){
    e.preventDefault()
    console.log("Submitted")
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h2>Contact Form</h2>

          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App