import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <button 
        onClick={()=> setColor("Red")}
        className="mr-4 bg-white">Red</button>
        <button
        onClick={()=> setColor("Blue")} 
        className="mr-4 bg-white">Blue</button>
        <button
        onClick={()=> setColor("Green")}
        className="mr-4 bg-white">Green</button>
        <button
        onClick={()=> setColor("Yellow")}
        className="mr-4 bg-white">Yellow</button>
      </div>
    </>
  )
}

export default App
