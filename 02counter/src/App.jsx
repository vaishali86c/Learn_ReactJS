import './App.css'
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("Clicked", counter);
    setCounter(counter + 1)
  }

  const subValue = () => {
    console.log("Clicked", counter);
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <hr />
      <button onClick={subValue}>Sub Value</button>
    </>
  )
}

export default App
