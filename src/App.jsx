import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p></p>
      </div>
      <p className="read-the-docs">DevOps Project</p>
      <p className="read-the-docs">
        Containerize ReactJS app and Push to DockerHub using GitHub Actions
      </p>
      <p>Project by - Muhammad Zulqarnain</p>
      <p>
        <a href="https://linkedin.com/in/zulqarnainawan" target="_blank">
          LinkedIn
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://github.com/muhammad-zulqarnain-awan" target="_blank">
          GitHub
        </a>
      </p>
    </>
  );
}

export default App
