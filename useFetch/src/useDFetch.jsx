import { useState,useEffect } from "react";

export const useDFetch = (url)=>{

  const [data , setData] = useState([]);

  async function getDetail(){

    const res = await fetch(url);
    const ans = await res.json();
    setData(ans);
  }

  useEffect(()=>{
    getDetail();
  },[url]);


  return {data};
}

//function which do not return xml and have hook in it is custom hook