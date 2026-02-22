import { useState, useEffect } from 'react'
import './App.css'
import Employee from './components/Employee'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then(res => res.json())
      .then(d => setData(d))
      .catch(err => console.log("ERROR!!!", err))
  }, [])

  return (
    <>
      <h1>Hello HRMS!</h1>
      <p>Fetching data from the backend.....</p>

      <div>
        {data.map((d) => (
          <Employee key={d.id} {...d} />
        ))}
      </div>
    </>
  )
}

export default App