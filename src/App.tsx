import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Tasbeeh Counter</h2>

      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}

export default App