import { useState, useCallback, useEffect, useRef} from 'react'
function App() {
  const [length, setLength] = useState(8)
  const [numberAll , setNumber] = useState(true)
  const [spChar , setChar] = useState(true)
  const [pass, setPass] = useState("")

  // REF Hook
  const passRef = useRef(null)

  const passgenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAll) str += "0123456789"
    if (spChar) str += ".!@#$%&*"

    for (let i = 1; i <length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPass(pass)
  }, [length , numberAll, spChar, setPass])

  const copypass = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  },[pass])
  useEffect(()=>{
    passgenerator()
  }, [length , numberAll, spChar, passgenerator])

  return (
    <>
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={pass}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passRef}
          />
          <button
          onClick={copypass}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >
          Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={36}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAll}
            id='numberInput'
            onChange={()=>{
              setNumber((prev)=>!prev)
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={spChar}
            id='specialChar'
            onChange={()=>{
              setChar((prev)=>!prev)
            }}
            />
            <label htmlFor="numberInput">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
