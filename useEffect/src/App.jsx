
import axios from 'axios'
import React, { Suspense, useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await axios("https://jsonplaceholder.typicode.com/users")
      console.log(res.data)
      setData(res.data);

    }
    getData()
  }, [])

  // fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       // setData(json)
  //     })
  
  return (
    <>
    <h1>Hello world!</h1>
      {data ? data.map((item) => {
        return <div key={item.id}>
          <p>{item.name}</p>
        </div>
      }) : <h1>Loading...</h1>}
    </>
  )
}

export default App