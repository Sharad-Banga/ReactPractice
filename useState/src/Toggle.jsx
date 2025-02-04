import { useState } from "react"

export const Toggle =()=>{

  const [count , setCount] = useState(0);
  function jj(){
    setCount(prev=>prev+1);
  }
  return(
    <>
      <h3>{count}</h3>
      <button onClick={jj}>inc</button>
    </>
  )
}