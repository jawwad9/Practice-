import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);
  const addNum = ()=>{
    setNum(num + 1);
    console.log(num)
  }

const lessNum = ()=>{
setNum(num - 1);
console.log(num)
}
  return (
    <>
        <h1>Hello World</h1><br />
        <h1>Add {num}</h1><br />
        <button onClick={addNum}>Add {num}</button>
        <button onClick={lessNum}>Less {num}</button>
    </> ) 
}

export default App