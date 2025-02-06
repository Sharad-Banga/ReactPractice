
import './App.css'
import { useDFetch } from './useDFetch';

function App() {
  
  const {data} = useDFetch("https://jsonplaceholder.typicode.com/todos/");


  return (
    <>
      <ul>

          {data.map(ob => (
            <li key={ob.id}>{ob.title}</li>
          ))}

      </ul>
    </>
  )
}

export default App
