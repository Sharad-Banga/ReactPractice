import { useRef } from "react";
import { useEffect } from "react";
// import { useState } from "react"

export const usePrev =(count)=>{

  const prev = useRef();

  useEffect(()=>{

    prev.current = count;

  },[count]);

  return prev.current;

}