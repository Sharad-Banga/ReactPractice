import { useState } from "react"
import { XX } from "./XX";
export const PostComponent=()=>{
  const [post , setPost] = useState([]);

  var i =0;

  const jjj = post.map(post =>

    <XX name={post.name }  />

  )


  function addPost(){
    setPost([...post , {
      name : "sharad",
      class : "cse b",
      rollno : "2206383"
    }])
  }

  
  return (
    <>
        
        <h2>hello</h2>
      <button onClick={addPost}>Add</button>
      <div>
        {jjj}
      </div>

    </>
  )
}