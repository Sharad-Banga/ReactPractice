import { useEffect, useState } from 'react'
import './App.css'
import { Dis } from './Dis';

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [todo , setTodo]  =  useState([]);
  const [loading , setLoading] = useState(true);


  useEffect(()=>{

    async function jj(){
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab);
      const ans = await res.json();
      setTodo([...todo ,ans]);
      setLoading(false);
    }
    jj();

  },[currentTab]);

  return (
    <>
      <button onClick={()=>{
        setCurrentTab(1);
      }}>task 1</button>

      <button onClick={()=>{
        setCurrentTab(2);
      }}>task 2</button>

      <button onClick={()=>{
        setCurrentTab(3);
      }}>task 3</button>

      <div>
        <Dis todo={todo}/>
      </div>
    </>
  )
}

export default App
