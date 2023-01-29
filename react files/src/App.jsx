// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App


import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

export default function Card(){
  return (
    <div className="container"> 
      <div className="header">
        <img src="./src/image.jpg" />
        <h2>Lauren Warn</h2>
        <p className="post">Frontend Developer</p>
        <small>laurasmith.website</small>
        <button>Email</button>
      </div>
      <div className="body-content">
         <h3>About</h3>
         <p className="body-para">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

         <h3>Interests</h3>
         <p className="body-para">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
         
      </div>
    </div>
  )
}



















