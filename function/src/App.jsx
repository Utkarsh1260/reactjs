import React from 'react'

const App = () => {

  function userType(val){
    console.log(val)
  }

  return (
    <div>
     <input  onChange={function(elem){
      userType(elem.target.value)
     }} type="text" placeholder='Enter Your Name'/>


     <div className='try'  onMouseMove={(elem)=>{
      console.log(elem);
      console.log(elem.clientX);
      console.log(elem.clientY);
     }}></div>
    </div>
  )
}

export default App




//Other events


// 🔹 Keyboard Events
// onKeyDown={(e) => console.log("Key Down:", e.key)}
// onKeyUp={(e) => console.log("Key Up:", e.key)}
// onKeyPress={(e) => console.log("Key Press:", e.key)}

// 🔹 Mouse Events
// onClick={() => console.log("Clicked")}
// onDoubleClick={() => console.log("Double Clicked")}
// onMouseEnter={() => console.log("Mouse Enter")}
// onMouseLeave={() => console.log("Mouse Leave")}
// onMouseMove={(e) => { console.log(e.clientX, e.clientY) }}
// onMouseDown={() => console.log("Mouse Down")}
// onMouseUp={() => console.log("Mouse Up")}

// 🔹 Form Events
// onSubmit={(e) => { e.preventDefault(); console.log("Form Submitted") }}
// onChange={(e) => console.log(e.target.value)}
// onInput={(e) => console.log("Input Changed")}

// 🔹 Focus Events
// onFocus={() => console.log("Focused")}
// onBlur={() => console.log("Blurred")}

// 🔹 Clipboard Events
// onCopy={() => console.log("Copied")}
// onPaste={() => console.log("Pasted")}
// onCut={() => console.log("Cut")}

// 🔹 Drag & Drop Events
// draggable
// onDragStart={() => console.log("Drag Start")}
// onDragEnd={() => console.log("Drag End")}
// onDragOver={(e) => e.preventDefault()}
// onDrop={() => console.log("Dropped")}

// 🔹 Scroll & Wheel Events
// onScroll={() => console.log("Scrolling")}
// onWheel={(e) => console.log("Scroll Wheel:", e.deltaY)}

// 🔹 Touch Events (Mobile)
// onTouchStart={() => console.log("Touch Start")}
// onTouchEnd={() => console.log("Touch End")}

// 🔹 Useful Event Properties
// e.target.value
// e.clientX, e.clientY
// e.key
// e.preventDefault()
// e.stopPropagation()

