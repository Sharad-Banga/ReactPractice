import { useState } from 'react'
import { usePrev } from './usePrev';
import './App.css'

function App() {
   const [count, setCount] = useState(0)
    const prev  = usePrev(count);
  return (
    <>

      <h3>count : {count}</h3>
      <br />
      <h3>prev : {prev}</h3>
      <br />
      <button onClick={()=>{
        setCount((c)=>c+1);
      }}>increment</button>
      
    </>
  )
}

export default App
