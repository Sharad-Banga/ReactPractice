import { useState,useRef } from "react"

export const Stopwatch =()=>{
  
  const timeRef = useRef(null);

  const [time , setTime] = useState(0);

  function startTimer(){
    if (timeRef.current !== null) return;

     timeRef.current= setInterval(()=>{
      setTime(prev=>prev+1);
    },1000);
  };

  function stopTimer(){
    clearInterval(timeRef.current);
    timeRef.current=null;
  }

  return (
    <>
        <h3>time : {time}</h3>
        <br />
        <button onClick={startTimer}>start</button>
        <br />
        <br />
        <button onClick={stopTimer}>stop</button>
    </>
  )
}